import { useEffect, useState } from 'react'

import {
    getAllTransactionsAction,
    getExpensesAction,
    getSavingsAction,
} from '../store/actions/transactionActions'
import { useSelector, useDispatch } from 'react-redux'

import Sidebar from '../components/Sidebar/Sidebar'
import Navbar from '../components/Navbar/Navbar'
import Analytic from '../components/Analytic/Analytic'
import FAQ from '../components/FAQ/FAQ'
import Transactions from '../components/Transactions/Transactions'
import LineChart from '../components/Chart/LineChart'
import BarChart from '../components/Chart/BarChart'

import { Div, Section } from '../styles/Reusable.elements'

const Dashboard = () => {
    const [loading, setLoading] = useState(true)

    const { user } = useSelector((state) => state.userReducer)
    const { expense, savings, allTransactions } = useSelector(
        (state) => state.transactionReducer
    )

    const dispatch = useDispatch()

    useEffect(() => {
        async function getExpenses() {
            const limit = 5
            const category = 'expense'
            await dispatch(getExpensesAction(user.id, limit, category))
            setLoading(false)
        }
        async function getSavings() {
            const limit = 5
            const category = 'savings'
            await dispatch(getSavingsAction(user.id, limit, category))
            setLoading(false)
        }

        getExpenses()
        getSavings()
    }, [user.id])

    useEffect(() => {
        async function getAllTransactions() {
            await dispatch(getAllTransactionsAction(user.id))
        }
        getAllTransactions()
    }, [user.id])

    const exps = allTransactions.filter(
        (transaction) => transaction.category === 'expense'
    )
    const expenseTotal = exps.reduce((curr, prev) => prev.amount + curr, 0)

    const svngs = allTransactions.filter(
        (transaction) => transaction.category === 'savings'
    )
    const savingsTotal = svngs.reduce((curr, prev) => prev.amount + curr, 0)

    const balance = savingsTotal - expenseTotal

    return (
        <>
            <Div>
                <Sidebar />
                <Section>
                    <Navbar user={user} />
                    <div className='grid'>
                        <div className='row__one'>
                            <Analytic
                                expenseTotal={expenseTotal}
                                savingsTotal={savingsTotal}
                                balance={balance}
                            />
                            <FAQ />
                        </div>
                        <div className='row__two'>
                            <Transactions
                                title='Expenses'
                                transType={false}
                                data={expense}
                                loading={loading}
                                url='/expenses'
                            />
                            <Transactions
                                title='Savings'
                                transType={true}
                                data={savings}
                                loading={loading}
                                url='/savings'
                            />

                            <LineChart title='Monthly View' />
                            <BarChart
                                title='Transactions View'
                                expenseTotal={expenseTotal}
                                savingsTotal={savingsTotal}
                                loading={loading}
                            />
                        </div>
                    </div>
                </Section>
            </Div>
        </>
    )
}

export default Dashboard
