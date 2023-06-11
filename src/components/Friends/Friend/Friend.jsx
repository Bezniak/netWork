import React from 'react';
import s from './Friend.module.css';
import {NavLink} from "react-router-dom";

const Friend = (props) => {
    return (
        <div className={s.friendBlockItems}>
            <NavLink to={'/friend/' + props.id} className={s.friendBlock}>
                <img src={props.imgAva} alt="photo"/>
                <div>{props.name}</div>
            </NavLink>
        </div>

    );
};



export default Friend;