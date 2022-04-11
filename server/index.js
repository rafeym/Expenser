const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const connectDB = require('./config/db')

const app = express()

require('dotenv').config({
    path: './config/index.env',
})

connectDB()
app.use(express.urlencoded({ limit: '50mb', extended: true }))
app.use(express.json({ limit: '50mb', extended: true }))
app.use(morgan('dev'))
app.use(cors())

//Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/transaction', require('./routes/transaction'))

// Test Route
app.get('/', (req, res) => {
    res.send('Test route for Expense Tracker')
})

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})
