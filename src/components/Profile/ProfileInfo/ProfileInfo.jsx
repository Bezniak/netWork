import React from 'react';
import s from './ProfileInfo.module.css';
import profileImg from '../../../img/profileImg.jpg'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src={profileImg} alt="main photo"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;