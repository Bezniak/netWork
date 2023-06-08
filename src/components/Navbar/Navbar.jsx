import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "../Friends/Friends";


const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" className={({isActive}) => (isActive ? s.active : s.item)}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' className={({isActive}) => (isActive ? s.active : s.item)} >Dialogs</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" className={({isActive}) => (isActive ? s.active : s.item)}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" className={({isActive}) => (isActive ? s.active : s.item)}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" className={({isActive}) => (isActive ? s.active : s.item)}>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/friends" className={({isActive}) => (isActive ? s.active : s.item)}>Friends</NavLink>
            </div>
            <div className={s.lll}>
                <Friends state={props.state.siteBar}/>
            </div>
        </nav>
    );
};

export default Navbar;