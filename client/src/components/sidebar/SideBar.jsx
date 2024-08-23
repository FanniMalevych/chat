import { useState, useEffect } from "react";
import axios from "axios";
import SearchInput from "./SearchInput";
import Chat from "./Chat";



const SideBar = () =>  {
    const [conversations, setConversations] = useState([])
    useEffect(() => {
        axios.get('/api/conversations').then((resp) => {
            setConversations(resp.data)
           })

    },[])
    
    return (
        <>
       <SearchInput />
       
        <div className="side-bar">
        <ul>
            {conversations.map(el => <Chat key={el._id} firstName={el.firstName} lastName={el.lastName} _id={el._id}/>)}
        
        </ul>
        </div>
        </>
    )
}

export default SideBar;