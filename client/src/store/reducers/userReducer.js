import jwt_decode from 'jwt-decode'
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
} from '../actions/types'

const initState = {
    user: null,
    token: '',
}

const verifyToken = (token) => {
    const decodedToken = jwt_decode(token)

    const expiresIn = new Date(decodedToken.exp * 1000)

    if (new Date() > expiresIn) {
        localStorage.removeItem('token')
        return null
    } else {
        return decodedToken
    }
}

const token = localStorage.getItem('token')

if (token) {
    const decoded = verifyToken(token)
    if (decoded) {
        initState.token = token
        const { name, picture, email } = decoded
        initState.user = {
            name,
            picture,
            email,
        }
    }
}

export const userReducer = (state = initState, action) => {
    const { type, payload } = action
    switch (type) {
        case LOGIN_SUCCESS:
            const decoded = verifyToken(payload)
            return {
                ...state,
                token: payload,
                user: {
                    name: decoded.name,
                    email: decoded.email,
                    picture: decoded.picture,
                },
            }
        case LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                user: null,
                token: '',
            }
        case LOGIN_FAIL:
            return {
                ...state,
            }
        default:
            return state
    }
}
