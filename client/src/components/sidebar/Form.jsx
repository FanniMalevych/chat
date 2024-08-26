import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import axios from 'axios'
import useListConversations from '../../zustand/useListConversations'

const Form = ({ edit = false, id = null, firstN = '', lastN = ''}) => {
    
    const [isVisible, setIsVisible] = useState(edit)
    const [name, setName] = useState(firstN)
    const [lastName, setLastName] = useState(lastN)
    const { addConversation, updateConversation } = useListConversations()

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsVisible(false)
        setName('')
        setLastName('')
        if(edit) {
            axios.put(`/api/conversations/${id}`, {firstName: name, lastName})
            updateConversation({_id: id, firstName: name, lastName})
        } else {
            console.log('inside add');
            
            axios.post('/api/conversations', {firstName: name, lastName})
            addConversation({firstName: name, lastName})
        }
    } 
    return (

        <>
        {!edit &&  <button onClick={() => setIsVisible(true)} className="add-conversation">
                        <FontAwesomeIcon icon={faUserPlus} />
                        <p>add new conversation</p>
                    </button>
        }
       <div className="modal" style={{display: !isVisible && 'none' }}>
            <div className="modal-content">
            {!edit ? <h2>Create new conversation</h2> : <h3>Edit conversation data</h3> }
            <hr />
                <form onSubmit={handleSubmit} className='conversation-form'>
                    <input 
                        className='input-conversation-data'
                        type="text" 
                        placeholder="Enter first name" 
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}/>
                    <input 
                        className='input-conversation-data'
                        type="text" 
                        placeholder="Enter last name" 
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}/>
                    <div className="modal-button">
                        <button type="submit" >Ok</button>
                        <button type='reset'  onClick={() => setIsVisible(false)}>Close</button>
                    </div>          
                </form>        
            </div>
        </div>
    </>
    )
}

export default Form