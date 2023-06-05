import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialogs/1">Ivan</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Oleg</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Sara</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Jon</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">Veronika</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/6">Paul</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi!</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>YoYo</div>
            </div>
        </div>
    );
};

export default Dialogs;