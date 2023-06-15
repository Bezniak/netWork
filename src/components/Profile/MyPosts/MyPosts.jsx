import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

    let postsElement = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}
                                                  likeState={p.likeState}/>)

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);

    }

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div className={s.postsItems}>
                    <textarea placeholder='Say something'
                              onChange={onPostChange}
                              value={props.newPostText}
                    />
                <button className={s.btn} onClick={onAddPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
};

export default MyPosts;