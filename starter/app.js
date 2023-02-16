const express = require('express')
const app = express()
const tasks = require('./routes/tasks')

const connectDB = require('./db/connect')
require('dotenv').config()

// Middleware
app.use(express.static('./public'))
app.use(express.json())

// Routes
app.use('/api/v1/tasks', tasks)

const port = process.env.PORT || 3300


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Server started on port ${port}....`)
        })
    }
    catch (err) {
        console.log(err)
    }
}

start()

