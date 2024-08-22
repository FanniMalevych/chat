import express  from 'express'
import dotenv from 'dotenv'

const app = express()
dotenv.config()
const PORT = process.env.PORT || 6000

app.get('/', (req, res) => {
    res.send('hi hi')
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))