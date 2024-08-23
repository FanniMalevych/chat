import { useEffect, useContext, useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";
import Message from "./Message";
import MessageInput from "./MessageInput";
import { conversationContext } from "../../App";


const MessagesContainer = () => {
const [conv, setConv] = useContext(conversationContext); 
const [messages, setMessages] = useState([])

// const socket = io('http://localhost:8000')
//     // Load the last 10 messages in the window.
//     useEffect(() => {
//         socket.on('init', (msg) => {
//             let msgReversed = msg.reverse();
//             console.log(msgReversed);
            
//           });
//     }, [])
    

//     socket.on('push', (msg) => {
//         setMessages(...messages, msg)
//       });

    // [msg, setMsg] = useState('')
    useEffect(() => {
        if(conv) {
            axios.get(`/api/messages/${conv}`).then((resp) => {
                console.log(resp.data);
                setMessages(resp.data)
                console.log(conv);
                
               })
        }
        // const fetchMessages = async () => {
        //     const resp = await fetch(`/api/messages/${conv}`)
        //     const {data} = await resp.json()
        //     console.log(data);
            
        // }
        // fetchMessages()
        

    },[conv])

    
    return (
        <div className="box">
            {messages.map(el => <Message key={el._id} ownType={el.ownType} message={el.message}/>)}
            <MessageInput/>
        </div>
    )
}

export default MessagesContainer