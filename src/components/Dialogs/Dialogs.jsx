import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}


const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Ivan'},
        {id: 2, name: 'Oleg'},
        {id: 3, name: 'Sara'},
        {id: 4, name: 'Jon'},
        {id: 5, name: 'Veronika'},
        {id: 6, name: 'Paul'},
    ]

    let messages = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'I would like to visit Italy'},
        {id: 3, message: 'I am going to NYC'},
        {id: 4, message: 'Learn React right now!!!'},
    ]


    let messagesElements = messages
        .map(m => <Message key={m.id} message={m.message}/>)

    let dialogsElements = dialogs
        .map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;