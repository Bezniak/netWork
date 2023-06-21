import React from 'react';
import s from './Profile.module.css';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {profileAPI} from "../../api/api";

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = 28698
        }
        profileAPI.getProfile(userId)
            .then(data => {
                this.props.setUserProfile(data)
            })
    }

    render() {
        return (
            <div className={s.content}>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})


export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));