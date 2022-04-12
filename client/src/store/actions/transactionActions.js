import axios from 'axios'
import { toast } from 'react-toastify'
import { devUrl } from '../../helper/devUrl'
import {
    TRANSACTION_REQUEST,
    TRANSACTION_FAIL,
    GET_EXPENSES_REQUEST,
    GET_EXPENSES_SUCCESS,
    GET_EXPENSES_FAIL,
    GET_SAVINGS_REQUEST,
    GET_SAVINGS_SUCCESS,
    GET_SAVINGS_FAIL,
    GET_ALL_TRANSACTIONS_REQUEST,
    GET_ALL_TRANSACTIONS_FAIL,
    GET_ALL_TRANSACTIONS_SUCCESS,
    DELETE_EXPENSE_TRANSACTION_REQUEST,
    DELETE_EXPENSE_TRANSACTION_SUCCESS,
    DELETE_SAVINGS_TRANSACTION_REQUEST,
    DELETE_SAVINGS_TRANSACTION_SUCCESS,
} from './types'

export const newTransactionAction = (data) => async (dispatch) => {
    dispatch({
        type: TRANSACTION_REQUEST,
    })
    try {
        const response = await axios.post(`${devUrl}/api/transaction`, data)

        toast.success(response.data.msg)
    } catch (error) {
        dispatch({
            type: TRANSACTION_FAIL,
        })
    }
}

export const getAllTransactionsAction = (id) => async (dispatch) => {
    dispatch({
        type: GET_ALL_TRANSACTIONS_REQUEST,
    })

    try {
        const response = await axios.get(`${devUrl}/api/transaction/${id}`)

        dispatch({
            type: GET_ALL_TRANSACTIONS_SUCCESS,
            payload: response.data.transactions,
        })
    } catch (error) {
        dispatch({
            type: GET_ALL_TRANSACTIONS_FAIL,
        })
    }
}

export const getExpensesAction =
    (id, limit, category, page) => async (dispatch) => {
        dispatch({
            type: GET_EXPENSES_REQUEST,
        })

        try {
            const response = await axios.get(
                `${devUrl}/api/transaction/${id}/${limit}/${category}/${page}`
            )

            // console.log(response)

            dispatch({
                type: GET_EXPENSES_SUCCESS,
                payload: {
                    transactions: response.data.transactions,
                    pageLimit: response.data.pageLimit,
                    count: response.data.count,
                },
            })
        } catch (error) {
            dispatch({
                type: GET_EXPENSES_FAIL,
            })
        }
    }

export const getSavingsAction =
    (id, limit, category, page) => async (dispatch) => {
        dispatch({
            type: GET_SAVINGS_REQUEST,
        })

        try {
            const response = await axios.get(
                `${devUrl}/api/transaction/${id}/${limit}/${category}/${page}`
            )

            dispatch({
                type: GET_SAVINGS_SUCCESS,
                payload: {
                    transactions: response.data.transactions,
                    pageLimit: response.data.pageLimit,
                    count: response.data.count,
                },
            })
        } catch (error) {
            dispatch({
                type: GET_SAVINGS_FAIL,
            })
        }
    }

export const deleteExpenseTransactionAction = (id) => async (dispatch) => {
    dispatch({
        type: DELETE_EXPENSE_TRANSACTION_REQUEST,
    })

    try {
        const response = await axios.delete(`${devUrl}/api/transaction/${id}`)

        dispatch({
            type: DELETE_EXPENSE_TRANSACTION_SUCCESS,
            payload: response.data.transaction,
        })

        toast.success(response.data.msg)
    } catch (error) {}
}

export const deleteSavingsTransactionAction = (id) => async (dispatch) => {
    dispatch({
        type: DELETE_SAVINGS_TRANSACTION_REQUEST,
    })

    try {
        const response = await axios.delete(`${devUrl}/api/transaction/${id}`)

        dispatch({
            type: DELETE_SAVINGS_TRANSACTION_SUCCESS,
            payload: response.data.transaction,
        })

        toast.success(response.data.msg)
    } catch (error) {}
}
