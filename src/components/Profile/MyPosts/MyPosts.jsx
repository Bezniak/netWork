import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);


const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.postsItems}>

            <Field
                name='newPostText'
                component={Textarea}
                validate={[requiredField, maxLength10]}
                placeholder={"Post message"}
            />

            <button className={s.btn}>Add post</button>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)


const MyPosts = (props) => {

    let postsElement = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}
                                                  likeState={p.likeState}/>)

    let onAddPost = (values) => {
        props.addPostActionCreator(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>

            <AddNewPostFormRedux onSubmit={onAddPost}/>

            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
};


export default MyPosts;