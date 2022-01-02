import s from './Message.module.css'
import React from "react";


const Message = (props) => {

    return (
        <div className={s.message}>
            <a className={s.user} href="#">
                <img className={s.user__image} src="https://cdn.wallpapersafari.com/27/87/ayWENi.jpg" alt=""/>
            </a>
            <span className={s.dialogMess}>{props.latter}</span>
        </div>
    )
}

export default Message