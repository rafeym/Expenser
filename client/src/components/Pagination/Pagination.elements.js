import styled from 'styled-components'

export const SPagination = styled.div`
    display: flex;
    margin-bottom: 1rem;
    margin-top: 1rem;

    & li:first-child {
        border-left: 1px solid rgb(75, 89, 247);
        border-top-left-radius: 0.6rem;
        border-bottom-left-radius: 0.6rem;
    }

    & li:last-child {
        border-top-right-radius: 0.6rem;
        border-bottom-right-radius: 0.6rem;
    }

    & li {
        list-style: none;
        display: block;
        padding: 0.5rem;
        border: 1px solid #101522;
        border-left: none;
        cursor: pointer;

        & a {
            padding: 1rem;
            color: black;
            font-size: 1.4rem;
            text-decoration: none;
        }
    }

    .active-page {
        background-color: #101522;
        & a {
            color: white;
        }
    }
`
