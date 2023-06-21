import React from "react";
import s from "./Users.module.css";
import {NavLink} from "react-router-dom";
import avaPhoto1 from "../../img/avaPhoto1.png";
import axios from "axios";

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
                {pages.map((p, index) => {
                    return <span className={props.currentPage === p && s.selectedPage}
                                 key={index}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>


            {
                props.users.map(u => <div className={s.userWrapper} key={u.id}>
                    <div className={s.userPhoto}>
                        <NavLink to={'/profile/' + u.id}>
                            <img className={s.userPhoto}
                                 src={u.photos.small != null ? u.photos.small : avaPhoto1}
                                 alt="photo ava"/>
                        </NavLink>
                        <p>{u.status != null ? u.status : 'no status'}</p>
                        <div className={s.userNameButtonItems}>
                            <NavLink className={s.userNameLink} to={'/profile/' + u.id}>
                                <p className={s.userName}>{u.name}</p>
                            </NavLink>
                            <div>
                                {u.followed
                                    ? <button className={s.btn} onClick={() => {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                            {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "11c88bea-a40a-43b8-8dc4-2a87fff1cf34",
                                                }
                                            })
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    props.unfollow(u.id)
                                                }
                                            })

                                    }}>Unfollow</button>
                                    : <button className={s.btn} onClick={() => {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                            {},
                                            {
                                                withCredentials: true,
                                                headers: {
                                                    'API-KEY': "11c88bea-a40a-43b8-8dc4-2a87fff1cf34",
                                                }
                                            })
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    props.follow(u.id)
                                                }
                                            })

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



