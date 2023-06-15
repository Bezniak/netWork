import React from 'react';
import s from './Users.module.css';

const Users = (props) => {
    return (
        <div>

            {props.users.map(u => <div className={s.userWrapper} key={u.id}>
                <div className={s.imageContent}>
                    <div>
                        <img className={s.photo} src={u.photoUrl} alt="photo of profile"/>
                    </div>
                    <div>
                        {
                            u.followed
                                ? <button className={s.btn} onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button className={s.btn} onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>
                        }
                    </div>
                </div>
                <div className={s.descriptionContent}>
                    <div className={s.nameInfo}>
                        <h3>{u.fullName}</h3>
                        <p>{u.status}</p>
                    </div>
                    <div className={s.locationInfo}>
                        <p>{u.location.country},</p>
                        <p>{u.location.city}</p>
                    </div>
                </div>
            </div>)}

        </div>
    );
};

export default Users;