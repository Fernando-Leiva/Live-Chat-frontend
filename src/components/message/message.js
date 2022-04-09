import React from "react";
import "./Styles.css"

export const Message = ({message = '',img,colorUser='gray'}) => {

    const style = {
        backgroundColor : colorUser
    }
    
    return(
        <div className="containerM" style={style}>
            <img className="imagen" src={img} width={40} height={45} alt="Avatar"/>
            <span>{message}</span>
        </div>
    )
}