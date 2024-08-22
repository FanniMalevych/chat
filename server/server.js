import path from "path"
import express  from 'express'
import dotenv from 'dotenv'
import connectToMongoDB from './db/connectToMongoDB.js'
import messageRoutes from './routes/message.routes.js'
import conversationRoutes from './routes/conversation.routes.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 6000

app.use(express.json())

app.use("/api/conversations", conversationRoutes);
app.use("/api/messages", messageRoutes);


// app.use(express.static(path.join(__dirname, "/client/dist")));

// app.get("*", (req, res) => {
// 	res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
// });

app.get('/', (req, res) => {
    res.send('hi hi')
})

app.listen(PORT, () => {
    connectToMongoDB()
    console.log(`Server is running on port ${PORT}`)
})