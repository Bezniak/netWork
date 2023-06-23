import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import logo from "../../img/logo.png";
import avaPhoto1 from "../../img/avaPhoto1.png";

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
                    {props.isAuth ? props.login : <NavLink to={"login"}>Login</NavLink>}

                </div>
            </div>


        </header>
    );
};

export default Header;