const express = require('express')
const {
    newTransaction,
    getTransactions,
    getAllTransactions,
} = require('../controllers/transaction')

const router = express.Router()

router.post('/', newTransaction)
router.get('/:id', getAllTransactions)

module.exports = router
