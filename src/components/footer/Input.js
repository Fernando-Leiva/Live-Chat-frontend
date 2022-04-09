import { faHome, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './Style.css'

export const Input = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        
        console.log("El mensage es: ",e)
    }
    return(
        <div className="containerinput">
            <section>
                <input type='text' placeholder="escribe aqui!" autoFocus className="message" id="message" />
                <FontAwesomeIcon target="message" icon={faPaperPlane}  onClick={handleSubmit} height={20} width={30} color="green"/>
            </section>
        </div>
    )
}