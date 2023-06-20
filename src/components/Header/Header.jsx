import React, {useEffect} from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import logo from "../../img/logo.png";
import axios from "axios";
import {setUserData} from "../../redux/auth-reducer";

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.headerItems}>
                <div className={s.headerLogo}>
                    <NavLink to='/profile'>
                        <img className={s.headerImage} src={logo}
                             alt="logo"/>
                    </NavLink>
                    <h2 className={s.logoText}>network</h2>
                </div>


                <div className={s.loginBlock}>
                    {props.isAuth ? props.email : <NavLink to='/login'>Login</NavLink>}
                </div>
            </div>


        </header>
    );
};

export default Header;