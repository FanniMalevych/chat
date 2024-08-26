import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import Message from "./Message";
import MessageInput from "./MessageInput";
import toast from "react-hot-toast";
import NoChatSelected from "./NoChatSelected";
import useConversation from "../../zustand/useConversation";


const MessagesContainer = () => {
const lastMessageRef = useRef();
const { selectedConversation, messages, setMessages } = useConversation()
const [newMsg, setNewMsg] = useState('')

useEffect(() => {
    setTimeout(() => {
        lastMessageRef.current?.lastElementChild?.scrollIntoView({ behavior: "smooth" });
    }, 100);
}, [messages]);

const socket = io('https://chat-nnpb.onrender.com')
useEffect (() => {
    socket.on('message', (msg) => {  
        setNewMsg(msg)
    })
}, [])

useEffect(() => {
    if(newMsg.message && !newMsg.ownType){
        toast(  `${newMsg.message}`, {
            icon: '💬',
          });
    }
}, [newMsg])


useEffect(() => {
    if(selectedConversation) {
        socket.on('init', (msg) => {
            const msgCur = msg.filter((el) => el.conversationId === selectedConversation)
            setMessages(msgCur)  
        });
    }
}, [selectedConversation, newMsg])
    
    return (
        <div className="message-container">
            { selectedConversation ? (
                <>
                    <div className="messages" ref={lastMessageRef}>
                    { messages.length ? 
                        messages.map(el => <Message key={el._id} ownType={el.ownType} message={el.message} />)
                    :
                        <p className="start-conversation">start conversation here</p>}
                        </div>
                    <MessageInput/>
                </>
            ) :
            <NoChatSelected />
        }
            
        </div>
    )
}

export default MessagesContainer