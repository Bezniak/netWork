import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let state = props.dialogsPage;


    let dialogsElement = state.dialogs.map(d => <DialogItem id={d.id} key={d.id} photo={d.photo}
                                                            name={d.name}/>)
    let messagesElements = state.messages.map(m => <Message key={m.id} message={m.message}/>)
    let newMessageBody = state.newMessageBody;


    let onSendMessage = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body)
    }


    return (
        <>
            <div className={s.dialogs}>
                <div>
                    {dialogsElement}
                </div>
                <div>
                    {messagesElements}
                </div>
            </div>

            <div className={s.messagesItems}>
                <textarea onChange={onNewMessageChange}
                          value={newMessageBody}
                          placeholder='Wright something'></textarea>
                <button className={s.btn} onClick={onSendMessage}>Send</button>
            </div>
        </>

    );
};

export default Dialogs;