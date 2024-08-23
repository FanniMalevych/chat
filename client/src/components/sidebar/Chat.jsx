import { useContext } from "react";
import { conversationContext } from "../../App";

const Chat = ({_id, firstName, lastName}) => {
    const [conv, setConv] = useContext(conversationContext); 
    console.log(conv);
    
    return (
        <div onClick={() => setConv(_id)}>
            <h1>{firstName}</h1>
            <h2>{lastName}</h2>
        </div>
    )
}

export default Chat