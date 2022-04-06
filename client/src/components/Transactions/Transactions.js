import { useState } from 'react'
import moment from 'moment'
import { Section } from './Transactions.elements'

import { FiTrendingUp, FiTrendingDown } from 'react-icons/fi'
import { HiArrowNarrowRight } from 'react-icons/hi'

export default function Transactions({ title, transType, data = [], loading }) {
    const [state, setState] = useState(transType)

    return (
        <Section>
            <div className='title'>
                <h2>Recent {title}</h2>
            </div>
            <div className='transactions'>
                {loading ? (
                    'Fetching transactions...'
                ) : data.length === 0 ? (
                    'No recent transactions'
                ) : (
                    <>
                        {data.map((transaction) => {
                            return (
                                <div className='transaction'>
                                    <div className='transaction__title'>
                                        <div className='transaction__title__image'>
                                            {state ? (
                                                <div>
                                                    <FiTrendingUp />
                                                </div>
                                            ) : (
                                                <div>
                                                    <FiTrendingDown />
                                                </div>
                                            )}
                                        </div>
                                        <div className='transaction__title__details'>
                                            <h3>{transaction.title}</h3>
                                            <h5>
                                                {moment(
                                                    transaction.date
                                                ).fromNow()}
                                                {/* {moment(transaction.date).format(
                                            'MMM Do YY'
                                        )} */}
                                            </h5>
                                        </div>
                                    </div>
                                    <div className='transaction__amount'>
                                        <span>
                                            {transaction.category === 'expense'
                                                ? '-'
                                                : '+'}
                                            ${transaction.amount}
                                        </span>
                                    </div>
                                </div>
                            )
                        })}
                    </>
                )}
            </div>
            <a className='view' href='#'>
                View all <HiArrowNarrowRight />
            </a>
        </Section>
    )
}
