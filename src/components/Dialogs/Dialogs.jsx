import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Music from "../Music/Music";


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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Ivan' id='1'/>
                <DialogItem name='Oleg' id='2'/>
                <DialogItem name='Sara' id='3'/>
                <DialogItem name='Jon' id='4'/>
                <DialogItem name='Veronika' id='5'/>
                <DialogItem name='Paul' id='6'/>
            </div>
            <div className={s.messages}>
                <Message message='Hi!'/>
                <Message message='How are you?'/>
                <Message message='YoYo'/>
            </div>
        </div>
    );
};

export default Dialogs;