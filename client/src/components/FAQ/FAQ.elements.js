import styled from 'styled-components'
import { cardStyles } from '../../styles/Reusable.elements'

export const Section = styled.section`
    ${cardStyles};
    .title {
        h2 {
            color: white;
            font-weight: 400;
        }
    }
    .faqs {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-top: 1rem;
        .faq {
            display: flex;
            align-items: center;
            justify-content: space-between;
            cursor: pointer;
            padding: 5px;
            &:hover {
                margin-left: 10px;
                transition: 850ms;
            }
            .info {
                display: flex;
                gap: 1rem;
                align-items: center;

                h4 {
                    font-weight: 200;
                }
            }
            svg {
                font-size: 1.4rem;
            }
        }
    }
    @media screen and (min-width: 280px) and (max-width: 1080px) {
        svg {
            font-size: 2rem !important;
        }
    }
`
