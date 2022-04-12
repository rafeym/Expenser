import { useDispatch } from 'react-redux'
import { userLoginAction } from '../store/actions/userActions'
import { useState } from 'react'

import LoginCard from '../components/Login/LoginCard'
import Spinner from '../components/Spinner/Spinner'
import Header from '../components/Header/Header'

const Login = () => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)

    const responseSuccessGoogle = (response) => {
        setLoading(true)
        dispatch(userLoginAction(response))
    }

    const responseErrorGoogle = (response) => {
        console.log(response)
    }

    return (
        <>
            {loading ? (
                <Spinner loading={loading} />
            ) : (
                <>
                    <Header />
                    <LoginCard
                        btnTxt='Login with Google'
                        responseSuccessGoogle={responseSuccessGoogle}
                        responseErrorGoogle={responseErrorGoogle}
                    />
                </>
            )}
        </>
    )
}

export default Login
