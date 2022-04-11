import styled from 'styled-components'

export const Section = styled.section`
    position: fixed;
    left: 0;
    /* border-top-right-radius: 10px; */
    background-color: #101522;
    height: 100vh;
    width: 18vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0;
    gap: 2rem;
    .top {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 100%;

        .toggle {
            display: none;
        }
        .brand {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 2rem;
            span {
                font-size: 2rem;
                color: white;
            }
        }
        .links {
            display: flex;
            justify-content: center;
            ul {
                list-style-type: none;
                display: flex;
                flex-direction: column;
                gap: 1rem;
                li {
                    padding: 0.6rem 1rem;
                    border-radius: 0.6rem;
                    &:hover {
                        background-color: white;
                        a {
                            color: #101522;
                        }
                    }
                    a {
                        text-decoration: none;
                        display: flex;
                        gap: 1rem;
                        color: white;
                    }
                }
                .active {
                    background-color: white;
                    a {
                        color: #101522;
                    }
                }
            }
        }
    }

    .logout {
        padding: 0.3rem 1rem;
        border-radius: 0.6rem;
        &:hover {
            background-color: rgb(75, 89, 247);
        }
        a {
            text-decoration: none;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            color: white;
        }
    }
    @media screen and (min-width: 280px) and (max-width: 1080px) {
        position: initial;
        width: 100%;
        height: max-content;
        padding: 1rem;
        .top {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding: 0 1rem;
            .toggle {
                display: block;
                color: white;
                z-index: 99;
                svg {
                    font-size: 1.4rem;
                }
            }
            .brand {
                gap: 1rem;
                justify-content: flex-start;
            }
        }
        .top > .links,
        .logout {
            display: none;
        }
    }
`

export const ResponsiveNav = styled.div`
    display: none;
    position: fixed;
    right: -10vw;
    top: 0;
    z-index: 10;
    background-color: #101522;
    height: 100vh;
    /* width: ${({ state }) => (state ? '60%' : '0%')}; */

    transition: 850ms;
    display: flex;
    opacity: 0;
    visibility: hidden;
    padding: 1rem;

    .responsive__links {
        ul {
            list-style-type: none;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin-top: 3rem;
            li {
                padding: 0.6rem 1rem;
                border-radius: 0.6rem;
                &:hover {
                    background-color: white;
                    a {
                        color: #101522;
                    }
                }
                a {
                    text-decoration: none;
                    display: flex;
                    gap: 1rem;
                    color: white;
                }
            }
            .active {
                background-color: white;
                a {
                    color: #101522;
                }
            }
        }
    }
`
