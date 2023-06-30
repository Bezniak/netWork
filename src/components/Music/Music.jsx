import React from 'react';
import s from './Music.module.css';
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const Music = () => {
    return (
        <div>
            Music
        </div>
    );
};

export default compose(
    withAuthRedirect,
)(Music);