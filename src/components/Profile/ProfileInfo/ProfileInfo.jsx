import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://www.bestattravel.co.uk/the-edit/wp-content/uploads/2021/02/New-York-Landmarks.jpg"
                     alt="main"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;