import path from "path"
import express  from 'express'
import dotenv from 'dotenv'

import connectToMongoDB from './db/connectToMongoDB.js'
import conversationRoutes from './routes/conversation.routes.js'
import { app, server } from "./socket/socket.js"

dotenv.config()

const __dirname = path.resolve()

const PORT = process.env.PORT || 6000

app.use(express.json())

app.use("/api/conversations", conversationRoutes);

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

server.listen(PORT, () => {
    connectToMongoDB()
    console.log(`Server is running on port ${PORT}`)
})