const express = require('express')
const {
    newTransaction,
    getTransactions,
    getAllTransactions,
    deleteTransaction,
} = require('../controllers/transaction')

const router = express.Router()

router.post('/', newTransaction)
router.get('/:id', getAllTransactions)
router.get('/:id/:limit/:category/:page', getTransactions)
router.delete('/:id', deleteTransaction)

module.exports = router
