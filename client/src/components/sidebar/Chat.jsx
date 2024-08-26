import { useState } from "react";
import axios from "axios";
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import useConversation  from '../../zustand/useConversation'
import useListConversations from "../../zustand/useListConversations";
import Form from "./Form";

const Chat = ({_id, firstName, lastName}) => {
    const { setSelectedConversation } = useConversation();
    const [isEditable, setIsEditable] = useState(false)
    const { deleteConversation } = useListConversations()

    const handleDelete = () => {
        axios.delete(`/api/conversations/${_id}`)   
        deleteConversation(_id)
    }
    const handleEdit = () => {
        setIsEditable(true)
    }
    
    return (
        <div className="chat" >
            <div className="chat-info" onClick={() => setSelectedConversation(_id)}> 
                <h3>{firstName}</h3>
                <h3>{lastName}</h3>
            </div>
                <div className="chat-actions">
                    <button onClick={handleEdit}>   
                        <FontAwesomeIcon icon={faPenToSquare}  />
                    </button>
                    <button onClick={handleDelete}>
                        <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                </div>
            {!!isEditable && <Form edit={isEditable} id={_id} firstN={firstName} lastN={lastName}/>}
        </div>
    )
}

export default Chat