import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, onPostActionCreator} from "../../../redux/profile-reducer";


const MyPosts = (props) => {

    let postsElement = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}
                                                  likeState={p.likeState}/>)

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.dispatch(onPostActionCreator(text));

    }

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div className={s.postsItems}>
                    <textarea placeholder='Say something'
                              onChange={onPostChange}
                              value={props.newPostText}
                    />
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
};

export default MyPosts;