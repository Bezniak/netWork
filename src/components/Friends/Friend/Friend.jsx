import React from 'react';
import s from '../Friends.module.css';
import {NavLink} from "react-router-dom";

const Friend = (props) => {
    return (
        <div className={s.friendBlock}>
            <div><img src={props.imgAva} alt="photo"/></div>
            <div className={s.friendName}><NavLink to={props.id}>{props.name}</NavLink></div>
        </div>
    );
};

export default Friend;