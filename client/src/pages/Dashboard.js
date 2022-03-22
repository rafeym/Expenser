import { useDispatch, useSelector } from 'react-redux'
import { userLogoutAction } from '../store/actions/userActions'

import Sidebar from '../components/Sidebar/Sidebar'
import Navbar from '../components/Navbar/Navbar'
import Analytic from '../components/Analytic/Analytic'
import FAQ from '../components/FAQ/FAQ'
import Transactions from '../components/Transactions/Transactions'
import LineChart from '../Chart/LineChart'
import BarChart from '../Chart/BarChart'

import styled from 'styled-components'

const Dashboard = () => {
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.userReducer)

    const logout = () => {
        dispatch(userLogoutAction())
    }

    return (
        <>
            <Div>
                <Sidebar logout={logout} />
                <Section>
                    <Navbar user={user} />
                    <div className='grid'>
                        <div className='row__one'>
                            <Analytic />
                            <FAQ />
                        </div>
                        <div className='row__two'>
                            <Transactions title='Expenses' transType={false} />
                            <Transactions title='Savings' transType={true} />

                            <LineChart title='Monthly View' />
                            <BarChart />
                        </div>
                    </div>
                </Section>
            </Div>
        </>
    )
}

export default Dashboard

const Div = styled.div`
    position: relative;
`

const Section = styled.section`
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
