import React from 'react';
import s from './Profile.module.css';


const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://www.bestattravel.co.uk/the-edit/wp-content/uploads/2021/02/New-York-Landmarks.jpg"
                     alt="main"/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My post
            </div>
            <div>
                New post
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    post 1
                </div>
                <div className={s.item}>
                    post 2
                </div>
            </div>
        </div>
    );
};

export default Profile;