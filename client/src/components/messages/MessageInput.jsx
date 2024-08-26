import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import './style.css'
import { io } from "socket.io-client";
import useConversation from "../../zustand/useConversation";


const MessageInput = () => {
    const [message, setMessage] = useState("");
	const socket = io('http://localhost:8000')
	const { selectedConversation } = useConversation()

    const handleSubmit = async (e) => {
		e.preventDefault();
		if (!message) return;
		const response = await fetch('https://dummyjson.com/quotes/random');
        const { quote } = await response.json();

		socket.emit('message', { message, conversationId: selectedConversation, reply: quote });

		setMessage("");
	};
    return (
        <form onSubmit={handleSubmit}>
			<div className='input-msg-container'>
				<input
					type='text'
					className='input-msg '
					placeholder='Send a message'
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button type='submit' className='btn-send-msg'>
                	<FontAwesomeIcon icon={faPaperPlane} />
				</button>
			</div>
		</form>
    )
}

export default MessageInput