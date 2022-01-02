import s from './Dialog.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import Login from "../Login/Login";


const Dialog = (props) => {

    let dialogsElement = props.messagesPage.dialogsData.map(dialog => <DialogItem id={dialog.id} key={dialog.id} name={dialog.name}/>)
    let messagesElement = props.messagesPage.messagesData.map(mess => <Message id={mess.id} key={mess.id} latter={mess.latter}/>)

    let newMessageBody = props.newMessageBody

    let onSendMessageClick = () => {
        props.onSendMessageClick()
    }

    let onNewMessage = (e) => {
        let textBody = e.target.value
        props.onNewMessageChange(textBody)
    }

    // if(!props.isAuth){
    //     return <Login/>
    // }

    return (
        <div className={s.dialogs}>
            <div className={s.dialog__items}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
                <div className={s.inputArea}>
                    <textarea onChange={onNewMessage} value={newMessageBody} placeholder='Enter your message' className={s.inputFields}></textarea>
                    <button onClick={onSendMessageClick} className={s.send}>Отправить</button>
                </div>
            </div>
        </div>
    )


}

export default Dialog