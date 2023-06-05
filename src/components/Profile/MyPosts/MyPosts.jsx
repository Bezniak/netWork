import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea placeholder='Say something'></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you?' likesCount='16'/>
                <Post message='It is my first post!' likesCount='20'/>
                <Post message='I wanna visit Italy!' likesCount='87'/>
            </div>
        </div>
    );
};

export default MyPosts;