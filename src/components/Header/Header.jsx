import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import logo from "../../img/logo.png";

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.header__container}>
                <NavLink to='/profile'>
                    <img src={logo}
                         alt="logo"/>
                </NavLink>
                <h2 className={s.logoText}>network</h2>
            </div>
        </header>
    );
};

export default Header;