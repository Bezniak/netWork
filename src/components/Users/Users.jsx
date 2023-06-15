import React from 'react';
import s from './Users.module.css';

const Users = (props) => {


    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://thumbs.dreamstime.com/b/smart-man-nice-thoughtful-handsome-man-looking-you-standing-shadow-nice-thoughtful-handsome-man-looking-you-125924611.jpg',
                followed: false,
                fullName: 'Ivan',
                status: 'I learn React',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://thumbs.dreamstime.com/b/smart-man-nice-thoughtful-handsome-man-looking-you-standing-shadow-nice-thoughtful-handsome-man-looking-you-125924611.jpg',
                followed: true,
                fullName: 'Jon',
                status: 'I live in NYC',
                location: {city: 'NYC', country: 'USA'}
            },
            {
                id: 3,
                photoUrl: 'https://thumbs.dreamstime.com/b/smart-man-nice-thoughtful-handsome-man-looking-you-standing-shadow-nice-thoughtful-handsome-man-looking-you-125924611.jpg',
                followed: false,
                fullName: 'Alexa',
                status: 'I am Alexa',
                location: {city: 'WWW', country: 'Internet'}
            },
            {
                id: 4,
                photoUrl: 'https://thumbs.dreamstime.com/b/smart-man-nice-thoughtful-handsome-man-looking-you-standing-shadow-nice-thoughtful-handsome-man-looking-you-125924611.jpg',
                followed: true,
                fullName: 'Sara',
                status: 'I Chicago',
                location: {city: 'Chicago', country: 'USA'}
            },
        ])
    }


    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={s.userPhoto} alt='profile photo'/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
            }
        </div>
    );
};

export default Users;