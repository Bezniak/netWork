import React from 'react';
import s from '../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <NavLink to={"/dialogs/" + props.id} className={s.dialogsItems}>
            <img src={props.photo} alt="photo ava"/>
            <div>{props.name}</div>
        </NavLink>
    );
};

export default DialogItem;