const mongoose = require('mongoose')

const Schema = mongoose.Schema

const TransactionSchema = new Schema({
    title: {
        type: String,
    },
    category: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
})

module.exports = Transaction = mongoose.model('Transaction', TransactionSchema)
