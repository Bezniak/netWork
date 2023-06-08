import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElement = state.dialogs.map(d => <DialogItem id={d.id} key={d.id} photo={d.photo}
                                                                        name={d.name}/>)
    let messagesElements = state.messages.map(m => <Message key={m.id} message={m.message}/>)
    let newMessageBody = state.newMessageBody;


    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    let sendMessage = () => {
        props.store.dispatch(sendMessageCreator())
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
                <button onClick={sendMessage}>Send</button>
            </div>

        </>

    );
};

export default Dialogs;