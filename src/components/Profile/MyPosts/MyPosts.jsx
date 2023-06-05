import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {

    let posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: 33},
        {id: 2, message: 'It is my first post!', likesCount: 355},
        {id: 3, message: 'I am going to NYC!!!', likesCount: 876},
        {id: 4, message: 'I wanna visit Australia!', likesCount: 3565},
    ]

    let postsElement = posts.map( p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)


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
                {postsElement}
            </div>
        </div>
    );
};

export default MyPosts;