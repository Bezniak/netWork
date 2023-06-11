import React from 'react';
import s from './Post.module.css';

const Post = (props) => {


    return (
            <div className={s.item}>
                <img src="https://starsunfolded.com/wp-content/uploads/2021/01/Pavel-Durov.jpg" alt="ava"/>
                {props.message}
            </div>
    );
};

export default Post;