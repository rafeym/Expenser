import axios from 'axios'
import { devUrl } from '../../helper/devUrl'
import { LOGIN_SUCCESS, LOGIN_REQUEST, LOGIN_FAIL, LOGOUT } from './types'

export const userLoginAction = (googleResponse) => async (dispatch) => {
    dispatch({
        type: LOGIN_REQUEST,
    })

    try {
        const response = await axios.post(`${devUrl}/api/auth/googleAuth`, {
            token: googleResponse.tokenId,
        })

        // set local storage
        localStorage.setItem('token', response.data.tok)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: response.data.tok,
        })
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
        })
    }
}

export const userLogoutAction = () => (dispatch) => {
    dispatch({
        type: LOGOUT,
    })
}
