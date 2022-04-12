import {
    LOGOUT,
    GET_EXPENSES_SUCCESS,
    GET_SAVINGS_SUCCESS,
    GET_ALL_TRANSACTIONS_SUCCESS,
    DELETE_EXPENSE_TRANSACTION_SUCCESS,
    DELETE_SAVINGS_TRANSACTION_SUCCESS,
} from '../actions/types'

const initState = {
    expense: [],
    savings: [],
    other: [],
    allTransactions: [],
    count: 0,
    pageLimit: 0,
}

export const transactionReducer = (state = initState, action) => {
    const { type, payload } = action
    switch (type) {
        case GET_EXPENSES_SUCCESS: {
            return {
                ...state,
                expense: payload.transactions,
                count: payload.count,
                pageLimit: payload.pageLimit,
            }
        }
        case GET_SAVINGS_SUCCESS: {
            return {
                ...state,
                savings: payload.transactions,
                count: payload.count,
                pageLimit: payload.pageLimit,
            }
        }
        case GET_ALL_TRANSACTIONS_SUCCESS:
            return {
                ...state,
                allTransactions: payload,
            }
        case DELETE_EXPENSE_TRANSACTION_SUCCESS:
            return {
                ...state,
                expense: [
                    ...state.expense.filter(
                        (transaction) => transaction._id !== payload._id
                    ),
                ],
            }
        case DELETE_SAVINGS_TRANSACTION_SUCCESS:
            return {
                ...state,
                savings: [
                    ...state.savings.filter(
                        (transaction) => transaction._id !== payload._id
                    ),
                ],
            }
        case LOGOUT:
            return {
                ...state,
                expenses: [],
                savings: [],
                other: [],
            }
        default:
            return state
    }
}
