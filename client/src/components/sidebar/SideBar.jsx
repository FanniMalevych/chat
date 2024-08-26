import { useEffect } from "react";
import axios from "axios";
import SearchInput from "./SearchInput";
import Chat from "./Chat";
import './style.css'

import Form from "./Form";
import useListConversations from "../../zustand/useListConversations";


const SideBar = () =>  {
    const { setConversations, filteredConversations, setFilteredConversations} = useListConversations()
    useEffect(() => {
        axios.get('/api/conversations').then((resp) => {
            setConversations(resp.data)
            setFilteredConversations(resp.data)
           })
    },[])
    
    return (
        <div className="side-bar-container">
            <SearchInput />
            <div>
                <Form  /> 
            </div>
            <div className="side-bar">
                {filteredConversations.map(el => <Chat key={el._id} firstName={el.firstName} lastName={el.lastName} _id={el._id}/>)}
            </div>
        </div>
    )
}

export default SideBar;