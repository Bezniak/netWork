import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <>
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
            <ProfileStatus updateStatus={props.updateStatus} status={props.status}/>

        </>
    );
};

export default ProfileInfo;