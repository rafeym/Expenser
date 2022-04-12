import styled from 'styled-components'

export const FormContainer = styled.section`
    width: 100%;
    padding: 35px 50px;
    border-radius: 10px;
    background: #101522;
    h1 {
        color: white;
        font-size: 30px;
        font-weight: 300;
    }
    p {
        color: white;
    }
    form {
        width: 100%;
        margin: 30px auto 0 auto;

        .form-row {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            grid-gap: 20px 30px;
            margin-bottom: 20px;
            .form-column {
                label {
                    color: white;
                    font-size: 14px;
                }
                input {
                    width: 100%;
                    font-weight: 400;
                    padding: 12px 10px;
                    border-radius: 5px;
                    border: 1.2px solid white;
                    margin-top: 5px;
                    &:focus {
                        outline: none;
                        border-color: white;
                    }
                }
                select {
                    margin: 10px 0;
                    width: 100%;
                    padding: 12px 10px;
                    border: 2px solid black;
                    border-radius: 10px;
                    background: white;

                    &:focus {
                        outline: none;
                    }
                }
            }
        }
        .create-t-btn {
            border: none;
            display: inline-block;
            padding: 10px 20px;
            background: #4f48ec;
            color: white;
            border-radius: 5px;
            margin-right: 10px;
            &:hover {
                cursor: pointer;
            }
        }
    }
    @media screen and (max-width: 425px) {
        h1,
        p {
            text-align: center;
        }
        form {
            .create-t-btn {
                display: block;
                text-align: center;
                margin-bottom: 10px;
            }
        }
    }
`
