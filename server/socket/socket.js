import { createServer } from "http";
import { Server } from "socket.io";
import express, { response } from 'express'
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

    Message.find().then((messages) => {
        socket.emit('init', messages);
    });

    socket.on('message', ({ conversationId, message, reply }) => {
      try {
        const newMessage = new Message({
          conversationId,
          message,
          ownType: true
        });

        const autoReply = new Message({
            conversationId,
            message: reply,
            ownType: false
        })
          
        setTimeout(() => {
          autoReply.save().then(() => {
            io.emit('message', autoReply); 
          });
        }, 3000)

        newMessage.save().then(() => {
          io.emit('message', newMessage); 
        });
      } catch (err) {
        console.error(err);
      }
    });


    socket.on('disconnect', () => {
      console.log('A user disconnected');
    });
  });
  

export { app, io, server }