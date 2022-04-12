import jwt_decode from 'jwt-decode'
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../actions/types'

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

const tok = localStorage.getItem('token')

if (tok) {
    const decoded = verifyToken(tok)
    const { info, token } = decoded
    if (decoded) {
        initState.token = token
        const { name, picture, email, id } = info
        initState.user = {
            name,
            picture,
            email,
            id: id,
        }
    }
}

export const userReducer = (state = initState, action) => {
    const { type, payload } = action
    switch (type) {
        case LOGIN_SUCCESS:
            const decoded = verifyToken(payload)

            const { info, token } = decoded

            const { name, picture, email, id } = info

            return {
                ...state,
                token: token,
                user: {
                    name,
                    picture,
                    email,
                    id,
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
