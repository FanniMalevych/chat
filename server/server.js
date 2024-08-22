import express  from 'express'
import dotenv from 'dotenv'
import connectToMongoDB from './db/connectToMongoDB.js'

dotenv.config()

const app = express()

const PORT = process.env.PORT || 6000

app.get('/', (req, res) => {
    res.send('hi hi')
})

app.listen(PORT, () => {
    connectToMongoDB()
    console.log(`Server is running on port ${PORT}`)
})