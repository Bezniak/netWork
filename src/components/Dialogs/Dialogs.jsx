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

    let dialogsData = [
        {id: 1, name: 'Ivan'},
        {id: 2, name: 'Oleg'},
        {id: 3, name: 'Sara'},
        {id: 4, name: 'Jon'},
        {id: 5, name: 'Veronika'},
        {id: 6, name: 'Paul'},
    ]

    let messagesData = [
        {id: 1, message: 'Hi!'},
        {id: 1, message: 'I would like to visit Italy'},
        {id: 1, message: 'I am going to NYC'},
        {id: 1, message: 'Learn React right now!!!'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
            </div>
        </div>
    );
};

export default Dialogs;