import React from 'react';
import s from './ProfileInfo.module.css';
import profileImg from '../../../img/profileImg.jpg'
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.profileWrapper}>
            <div className={s.profileItems}>
                <img src={props.profile.photos.small} alt="profile photo"/>
            </div>
            <div className={s.profileName}>
                {props.profile.fullName}
            </div>
            <div className={s.aboutMe}>
                {props.profile.aboutMe}
            </div>
        </div>
    );
};

export default ProfileInfo;