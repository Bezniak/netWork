import React from 'react';
import s from '../Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs/" + props.id}>
                <img src={props.imgAva}></img>
            </NavLink>
            <NavLink className={s.dialogName} to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;