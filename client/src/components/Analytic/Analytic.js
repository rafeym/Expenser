import CountUp from 'react-countup'
import moment from 'moment'

import { Section } from './Analytic.elements'

import { BsFillCalendar2WeekFill } from 'react-icons/bs'
import { IoStatsChart } from 'react-icons/io5'
import { MdOutlineAttachMoney } from 'react-icons/md'
import { FiTrendingDown } from 'react-icons/fi'

export default function Analytic({ expenseTotal, savingsTotal, balance }) {
    return (
        <Section>
            <div className='analytic '>
                <div className='content'>
                    <h5>Today's Date</h5>
                    <h2>{moment().format('MMMM Do YYYY')}</h2>
                </div>
                <div className='logo'>
                    <BsFillCalendar2WeekFill />
                </div>
            </div>
            <div className='analytic'>
                <div className='logo'>
                    <MdOutlineAttachMoney />
                </div>
                <div className='content'>
                    <h5>Balance</h5>
                    <h2>
                        $
                        <CountUp
                            start={0}
                            end={balance}
                            duration={2.5}
                            separator=','
                        />
                    </h2>
                </div>
            </div>
            <div className='analytic'>
                <div className='logo'>
                    <FiTrendingDown />
                </div>
                <div className='content'>
                    <h5>Total Expenses</h5>
                    <h2>
                        $
                        <CountUp
                            start={0}
                            end={expenseTotal}
                            duration={2.5}
                            separator=','
                        />
                    </h2>
                </div>
            </div>
            <div className='analytic '>
                <div className='content'>
                    <h5>Total Savings</h5>
                    <h2>
                        $
                        <CountUp
                            start={0}
                            end={savingsTotal}
                            duration={2.5}
                            separator=','
                        />
                    </h2>
                </div>
                <div className='logo'>
                    <IoStatsChart />
                </div>
            </div>
        </Section>
    )
}
