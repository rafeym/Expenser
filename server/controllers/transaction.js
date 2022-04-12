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

// @route   GET api/transaction/:id/:limit/:category
// @desc    Get transactions of user
// @access  Private
module.exports.getTransactions = async (req, res) => {
    const { id, limit, category, page } = req.params
    const pageLimit = Number(limit)
    const skip = (page - 1) * pageLimit

    try {
        const count = await Transaction.find({
            userId: id,
            category: category,
        }).countDocuments()
        const transactions = await Transaction.find({
            userId: id,
            category: category,
        })
            .sort({
                _id: -1,
            })
            .skip(skip)
            .limit(pageLimit)
        return res.status(200).json({ transactions, count, pageLimit })
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

// @route   DELETE api/transaction/:id/
// @desc    Delete transaction
// @access  Private
module.exports.deleteTransaction = async (req, res) => {
    const { id } = req.params

    try {
        const transaction = await Transaction.findById(id)

        await Transaction.findByIdAndRemove(id)

        return res
            .status(200)
            .json({ msg: 'Transaction removed!', transaction })
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}
