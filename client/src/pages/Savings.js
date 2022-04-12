import React, { useState, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import {
    deleteSavingsTransactionAction,
    getSavingsAction,
} from '../store/actions/transactionActions'
import { useParams } from 'react-router'

import Pagination from '../components/Pagination/Pagination'
import Sidebar from '../components/Sidebar/Sidebar'
import Table from '../components/Table/Table'

import { Div, Section } from '../styles/Reusable.elements'

export default function Savings() {
    const [loading, setLoading] = useState(true)
    const { user } = useSelector((state) => state.userReducer)

    const { savings, count, pageLimit } = useSelector(
        (state) => state.transactionReducer
    )

    const dispatch = useDispatch()

    let { page } = useParams()

    if (page === undefined) {
        page = 1
    }

    useEffect(() => {
        async function getSavings() {
            const limit = 5
            const category = 'savings'
            await dispatch(getSavingsAction(user.id, limit, category, page))
            setLoading(false)
        }
        getSavings()
    }, [user.id, page])

    const deleteTransaction = (id) => {
        const confirm = window.confirm(
            'Are you sure you want to delete this transaction?'
        )

        if (confirm) {
            dispatch(deleteSavingsTransactionAction(id))
        }
    }

    return (
        <Div>
            <Sidebar />
            <Section>
                <Table
                    data={savings}
                    title='Savings'
                    loading={loading}
                    deleteTransaction={deleteTransaction}
                />
                <Pagination
                    page={page}
                    count={count}
                    pageLimit={pageLimit}
                    url='savings'
                />
            </Section>
        </Div>
    )
}
