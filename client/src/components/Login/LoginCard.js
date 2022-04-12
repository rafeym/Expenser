import { GoogleLogin } from 'react-google-login'
import { LoginContainer } from './Login.elements'

const LoginForm = ({ btnTxt, responseSuccessGoogle, responseErrorGoogle }) => {
    return (
        <>
            <LoginContainer>
                <GoogleLogin
                    clientId={process.env.REACT_APP_GOOGLE_CLIENTID}
                    buttonText={btnTxt}
                    onSuccess={responseSuccessGoogle}
                    onFailure={responseErrorGoogle}
                    cookiePolicy={'single_host_origin'}
                    render={(renderProps) => (
                        <button
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                            className='login-btn'
                        >
                            {btnTxt}
                        </button>
                    )}
                />
            </LoginContainer>
        </>
    )
}

export default LoginForm
