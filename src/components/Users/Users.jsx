import React from "react";
import s from "./Users.module.css";
import {NavLink} from "react-router-dom";
import avaPhoto1 from "../../img/avaPhoto1.png";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        if (pages.length < 20) {
            pages.push(i)
        }
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && s.selectedPage}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>


            {
                props.users.map(u => <div className={s.userWrapper} key={u.id}>
                    <div className={s.userPhoto}>
                        <NavLink to={'/users/' + u.id}>
                            <img className={s.userPhoto}
                                 src={u.photos.small != null ? u.photos.small : avaPhoto1}
                                 alt="photo ava"/>
                        </NavLink>
                        <p>{u.status != null ? u.status : 'no status'}</p>
                        <div className={s.userNameButtonItems}>
                            <NavLink className={s.userNameLink} to={'/users/' + u.id}>
                                <p className={s.userName}>{u.name}</p>
                            </NavLink>
                            <div>
                                {u.followed
                                    ? <button className={s.btn} onClick={() => {
                                        props.unfollow(u.id)
                                    }}>Unfollow</button>
                                    : <button className={s.btn} onClick={() => {
                                        props.follow(u.id)
                                    }}>Follow</button>
                                }
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Users;



