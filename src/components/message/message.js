import React from "react";
import "./Styles.css"

export const Message = ({message = {msg:''},img,colorUser='gray'}) => {

    const style = {
        backgroundColor : colorUser
    }
    
    return(
        <div className="containerM" style={style}>
            <span>{` ${message.user} `}</span>
            <div>
                <section> <img className="imagen" src={img} width={40} height={45} alt="Avatar"/></section>
                <span>{message.msg}</span>
            </div>     
        </div>
    )
}