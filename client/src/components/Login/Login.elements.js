import styled from 'styled-components'

export const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 90vh;

    & .login-btn {
        border: none;
        padding: 30px;
        width: 250px;
        background: rgb(75, 89, 247);
        color: white;
        border-radius: 5px;
        font-size: 15px;
        transition: 0.2s ease-in;

        &:hover {
            cursor: pointer;
            margin-bottom: 10px;
        }
    }
`
