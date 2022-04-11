import { css } from 'styled-components'
import styled from 'styled-components'

export const cardStyles = css`
    padding: 2rem 2rem 2rem 2rem;
    border-radius: 1rem;
    background-color: white;
    background: #101522;
    color: white;
`

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;
    @media screen and (max-width: 991px) {
        padding-right: 30px;
        padding-left: 30px;
    }
`
export const Button = styled.button`
    border-radius: 4px;
    background: ${({ primary }) => (primary ? '#4b59f7' : '#0467fb')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
    color: #fff;
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    &:hover {
        transition: all 0.3s ease-out;
        background: #fff;
        background: ${({ primary }) => (primary ? '#0467fb' : '#4b59f7')};
    }
    @media screen and (max-width: 960px) {
        width: 100%;
    }
`

export const Div = styled.div`
    position: relative;
`

export const Section = styled.section`
    margin-left: 18vw;
    padding: 2rem;
    height: 100%;
    .grid {
        display: flex;
        flex-direction: column;
        height: 100%;
        gap: 1rem;
        margin-top: 2rem;
        .row__one {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            height: 50%;
            gap: 1rem;
        }
        .row__two {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
            height: 50%;
        }
    }
    @media screen and (min-width: 280px) and (max-width: 1080px) {
        margin-left: 0;
        .grid {
            .row__one,
            .row__two {
                grid-template-columns: 1fr;
            }
        }
    }
`
