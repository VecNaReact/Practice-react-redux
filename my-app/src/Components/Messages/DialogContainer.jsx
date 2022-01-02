import React from "react";
import Dialog from "./Dialog";
import {connect} from "react-redux";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/messageReducer";

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        newMessageBody: state.newMessageBody,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onSendMessageClick: () => {
            dispatch(sendMessageCreator())
        },
        onNewMessageChange: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        }
    }
}


const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog)

export default DialogContainer