import React from "react";
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <NavLink to={'/messages/' + props.id} className={classes.Item + ' ' + classes.active}>
            <div>{props.name}</div>
        </NavLink>
    )
}
const MessageItem = (props) => {
    return (
        <div className={classes.Item}>
            {props.message}
        </div>
    )
}
const Dialogs = (props) => {
    let dialogs = props.dialogsData.map( d => <DialogItem name={d.name} id={d.id} key = {d.id}/>)
    let messages = props.messagesData.map(m => <MessageItem message={m.message} key = {m.id}/>)
    let newMessageRef = React.createRef();
    let newText = () => {
        let text = newMessageRef.current.value;
        props.AddMessageTextCreateAction(text);
    }
    let newMessage = () => {
        props.AddMessageCreateAction();
    }
    return (
        <div className={classes.Dialogs}>
            <div className={classes.DialogsItems}>
                {dialogs}
            </div>
            <div className={classes.MessagesItems}>
                <textarea onChange={newText} ref = {newMessageRef} value={props.messagesText}/>
                <button onClick={newMessage}>Add message</button>
                {messages}
            </div>
        </div>)
}

export default Dialogs