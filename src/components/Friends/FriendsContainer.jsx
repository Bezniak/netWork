import React from 'react';
import Friend from "./Friend/Friend";
import search from '../../img/searchImage.svg'
import s from './Friends.module.css';
import Friends from "./Friends";

const FriendsContainer = (props) => {

    let state = props.store.getState();

    return (
        <div>
            <Friends  sidebar={state.sidebar}/>
        </div>

    );
};

export default FriendsContainer;