import { faHome, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './Style.css'

export const Input = ({socket, setMessages, currentSocket }) => {
   
    const [message, setMessage] = React.useState('');
    const handleSubmit = (e) => {
        e.preventDefault()
        socket.emit("conectado",{msg: message, user: `Usuario ${currentSocket}`})
        setMessages((prevState) => {
            return [...prevState, {msg: message,user:"Me"}]      
        })
        setMessage('')
    }
   
    return(
        <div className="containerinput">
            <section>
                <input type='text' placeholder="escribe aqui!" defaultValue={message} onChange={e => setMessage(e.target.value)} autoFocus className="message" id="message" />
                <button><FontAwesomeIcon target="message" icon={faPaperPlane}  onClick={handleSubmit} height={20} width={30} color="green"/></button>
            </section>
        </div>
    )
}