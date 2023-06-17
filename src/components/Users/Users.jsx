import React from "react";
import s from "./Users.module.css";
import {NavLink} from "react-router-dom";
import avaPhoto1 from "../../img/avaPhoto1.png";
import axios from "axios";

class Users extends React.Component {
    constructor(props) {
        super(props);

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }


    render() {
        return (
            <div>
                {
                    this.props.users.map(u => <div className={s.userWrapper} key={u.id}>
                        <div className={s.userPhoto}>
                            <NavLink to={'/users/' + u.id}>
                                <div>
                                    <img className={s.userPhoto}
                                         src={u.photos.small != null ? u.photos.small : avaPhoto1}
                                         alt="photo ava"/>
                                </div>
                            </NavLink>
                            <p>{u.status}</p>
                            <div className={s.userNameButtonItems}>
                                <NavLink className={s.userNameLink} to={'/users/' + u.id}>
                                    <p className={s.userName}>{u.name}</p>
                                </NavLink>
                                <div>
                                    {u.followed
                                        ? <button className={s.btn} onClick={() => {
                                            this.props.unfollow(u.id)
                                        }}>Unfollow</button>
                                        : <button className={s.btn} onClick={() => {
                                            this.props.follow(u.id)
                                        }}>Follow</button>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        )
    }

}

export default Users;