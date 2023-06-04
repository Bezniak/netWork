import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.header__container}>
                <img src="https://svgsilh.com/svg/97851-ffffff.svg"
                     alt="logo"/>
                <h2 className={s.logo__text}>network</h2>
            </div>
        </header>
    );
};

export default Header;