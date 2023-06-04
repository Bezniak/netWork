import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";


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
            <MyPosts/>
        </div>
    );
};

export default Profile;