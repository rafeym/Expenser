const Transaction = require('../models/Transaction')

// @route   POST api/transaction/new
// @desc    Create new transaction
// @access  Private
module.exports.newTransaction = async (req, res) => {
    const { title, amount, category, id } = req.body

    try {
        const transaction = await Transaction.create({
            title,
            amount,
            category,
            userId: id,
        })

        return res
            .status(200)
            .json({ msg: 'Transaction Successful!', transaction })
    } catch (error) {
        return res.status(500).json({ msg: 'Server error' })
    }
}

// @route   GET api/transaction/
// @desc    Get all transactions of user
// @access  Private
module.exports.getAllTransactions = async (req, res) => {
    const { id } = req.params

    try {
        const transactions = await Transaction.find({ userId: id })

        return res.status(200).json({ transactions })
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}
