import styled from 'styled-components'

export const Heading = styled.h2`
    margin-bottom: 20px;
    font-weight: 300;
`
export const STable = styled.div`
    /* max-width: 900px; */
    border: 1px solid #101522;
    padding: 50px;
    overflow: auto;
    /* margin: auto; */
    border-radius: 4px;

    table {
        width: 100%;
        font-size: 15px;
        color: rgb(75, 89, 247);
        white-space: nowrap;
        border-collapse: collapse;
        text-align: center;
        & > thead {
            background-color: #101522;
            color: white;

            th {
                padding: 15px;
            }
        }

        td {
            /* border: 1px solid grey; */
            padding: 10px 15px;
        }
        & > tbody > tr {
            &:nth-child(even) {
                background-color: #101522;
                color: white;
            }
        }
        tbody {
            .delete-btn {
                cursor: pointer;
            }
        }
    }
`
