import { useEffect, useState } from 'react'

import {
    deleteExpenseTransactionAction,
    getExpensesAction,
} from '../store/actions/transactionActions'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'

import Sidebar from '../components/Sidebar/Sidebar'
import Table from '../components/Table/Table'
import Pagination from '../components/Pagination/Pagination'

import { Div, Section } from '../styles/Reusable.elements'

export default function Expenses() {
    const [loading, setLoading] = useState(true)
    const { user } = useSelector((state) => state.userReducer)
    const { expense, count, pageLimit } = useSelector(
        (state) => state.transactionReducer
    )

    const dispatch = useDispatch()

    let { page } = useParams()

    if (page === undefined) {
        page = 1
    }

    useEffect(() => {
        async function getExpenses() {
            const limit = 5
            const category = 'expense'
            await dispatch(getExpensesAction(user.id, limit, category, page))
            setLoading(false)
        }
        getExpenses()
    }, [user.id, page])

    const deleteTransaction = (id) => {
        const confirm = window.confirm(
            'Are you sure you want to delete this transaction?'
        )

        if (confirm) {
            dispatch(deleteExpenseTransactionAction(id))
        }
    }

    return (
        <Div>
            <Sidebar />
            <Section>
                <Table
                    data={expense}
                    title='Expenses'
                    loading={loading}
                    deleteTransaction={deleteTransaction}
                />
                <Pagination
                    page={page}
                    count={count}
                    pageLimit={pageLimit}
                    url='expenses'
                />
            </Section>
        </Div>
    )
}
