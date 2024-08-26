import './style.css'

const Message  = ({ ownType, message }) =>  {
    return (
        <div className={!ownType ? "person-a": "person-b"}>
            <div className="message">
                {message}
            </div>
        </div>
    )
}

export default Message