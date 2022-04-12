import React from "react";
import user from './user.png'
import './Style.css'


export const Header = (props) => {

    const handleClick = () => {
        console.log("cliking",props.setShowModal)
        props.setShowModal(true)
    }
    
    return (
        <div onClick={handleClick} className="container">
            <img src={user} alt="Avatar" height={40} sizes={40}/>
            <span>{props.user}</span>
        </div>
    )
}