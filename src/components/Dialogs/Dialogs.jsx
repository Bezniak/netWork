import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {updateNewMessageText} from "../../redux/state";


const Dialogs = (props) => {

    let messagesElements = props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message}/>)

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} imgAva={d.imgAva}
                                                                         id={d.id}/>)

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        props.sendMessage();
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }


    return (
        <>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
            <div className={s.messagesItems}>
                <textarea ref={newMessageElement} onChange={onMessageChange} value={props.dialogsPage.newMessageText}
                          placeholder='Wright something'></textarea>
                <button onClick={sendMessage}>Send</button>
            </div>
        </>
    );
};

export default Dialogs;