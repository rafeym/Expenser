import styled from 'styled-components'

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    color: #101522;
    .title {
        h1 {
            color: #101522;
        }
    }
    .create-btn {
        background: rgb(75, 89, 247);
        padding: 1rem 5rem;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        span {
            color: white;
        }

        &:hover {
            cursor: pointer;
        }
    }

    @media screen and (min-width: 280px) and (max-width: 600px) {
        flex-direction: column;
        .title {
            h1 {
                margin-bottom: 1rem;
            }
        }
    }
`
