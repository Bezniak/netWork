import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let messagesElements = props.state.messages.map(m => <Message key={m.id} message={m.message}/>)

    let dialogsElements = props.state.dialogs.map(d => <DialogItem key={d.id} name={d.name} imgAva={d.imgAva}
                                                                   id={d.id}/>)

    let newMessageElement = React.createRef();


    let sendMessage = () => {
        let message = newMessageElement.current.value;
        alert(message)
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
                <textarea ref={newMessageElement} placeholder='Wright something'></textarea>
                <button onClick={sendMessage}>Send</button>
            </div>
        </>
    );
};

export default Dialogs;