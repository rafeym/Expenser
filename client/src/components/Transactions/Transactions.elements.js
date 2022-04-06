import styled from 'styled-components'
import { cardStyles } from '../../styles/Reusable.elements'

export const Section = styled.section`
    ${cardStyles};
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .title {
        h2 {
            color: white;
            font-weight: 400;
        }
    }
    .transactions {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-top: 1rem;
        .transaction {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            &__title {
                display: flex;
                gap: 1rem;
                &__image {
                    div {
                        border-radius: 3rem;
                        padding: 10px 13px;
                        border: 2px solid white;
                    }
                }
                &__details {
                    h3,
                    h5 {
                        font-weight: 300;
                    }
                }
            }
            &__amount {
                background-color: rgb(75, 89, 247);
                padding: 0.2rem 0.5rem;
                width: 4rem;
                border-radius: 1rem;
                text-align: center;
                transition: 0.3s ease-in-out;
            }
            span {
                color: white;
            }
        }
    }

    .view {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        text-decoration: none;
        color: white;
        font-weight: bold;
        margin-top: 1rem;
        gap: 0.5rem;
        svg {
            transition: 0.3s ease-in-out;
            font-size: 1.4rem;
        }
        &:hover {
            svg {
                transform: translateX(0.5rem);
            }
        }
    }
    @media screen and (min-width: 280px) {
        .transactions {
            .transaction {
                /* flex-direction: column; */
                align-items: center;
                gap: 1rem;

                &__title {
                    &__details {
                        /* width: 180px ; */
                    }
                }
            }
        }
    }

    @media screen and (max-width: 340px) {
        .transactions {
            .transaction {
                flex-direction: column;
                align-items: center;
                gap: 1rem;
            }
        }
    }
`
