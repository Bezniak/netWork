import React, {useEffect} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import axios from "axios";
import {setAuthUserData} from "../../redux/auth-reducer";

const HeaderContainer = (props) => {

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true,
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    const {id, login, email} = response.data.data;
                    props.setAuthUserData(id, login, email)
                }
            }, [])
    })

    return (
        <>
            <Header {...props} />
        </>
    );
};

const mapState = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        email: state.auth.email,
    }
}

export default connect(mapState, {setAuthUserData})(HeaderContainer);