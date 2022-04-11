import React from "react";
import user from './user.png'
import './Style.css'


export const Header = (props) => {
    const [userName, setUserName] = React.useState(props.user)
    return (
        <div className="container">
            <img src={user} alt="Avatar" height={40} sizes={40}/>
            <span>{userName}</span>
        </div>
    )
}