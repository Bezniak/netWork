import React from 'react';
import Friends from "./Friends";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


const mapStateToProps = (state) => {
    return {
        sidebar: state.sidebar,
    }
}


export default compose(
    connect(mapStateToProps),
    withAuthRedirect,
)(Friends);