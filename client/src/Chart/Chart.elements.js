import styled from 'styled-components'
import { cardStyles } from '../styles/Reusable.elements'

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
    @media screen and (min-width: 300px) and (max-width: 528px) {
        .chart {
            width: 250px;
        }
    }
`
