import { createServer } from "http";
import { Server } from "socket.io";
import express from 'express'
import Message from "../models/message.model.js";


const app = express()
const server = createServer(app)
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000"],
		methods: ["GET", "POST"],
    }
})

io.on('connection', (socket) => {
    console.log('socket connected');

    // Message.find().exec((err, messages) => {
    //       if (err) return console.error(err);
    //       socket.emit('init', messages);
    // })

    // Get the last 10 messages from the database.
    // Message.find().exec((err, messages) => {
    //   if (err) return console.error(err);
  
    //   // Send the last messages to the user.
    //   socket.emit('init', messages);
    // });
  
    // // Listen to connected users for a new message.
    // socket.on('message', (msg) => {
    //     console.log('inside socket');
        
    //   // Create a message with the content and the name of the user.
    //   const message = new Message({
    //     message: msg.message,
    //   });
  
    //   // Save the message to the database.
    //   message.save((err) => {
    //     if (err) return console.error(err);
    //   });
  
    //   // Notify all other users about a new message.
    //   socket.broadcast.emit('push', msg);
    // });
  });
  

export { app, io, server }