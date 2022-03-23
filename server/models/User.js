const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            max: 32,
        },
        email: {
            type: String,
            trim: true,
            required: true,
            unique: true,
            lowercase: true,
        },
        picture: {
            type: String,
        },
        transactions: {
            type: [mongoose.Types.ObjectId],
            ref: 'Transaction',
        },
    },
    {
        timestamps: true,
    }
)

module.exports = User = mongoose.model('User', UserSchema)
