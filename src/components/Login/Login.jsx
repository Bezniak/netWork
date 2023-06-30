import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import {compose} from "redux";
import style from './../common/FormsControls/FormsControls.module.css'


const LoginForm = (props) => {


    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name={'email'}
                    type='text'
                    placeholder={'Email'}
                    component={Input}
                    validate={[requiredField]}
                />
            </div>
            <div>
                <Field
                    name={'password'}
                    type="password"
                    placeholder='Password'
                    component={Input}
                    validate={[requiredField]}
                />
            </div>
            <div>
                <Field name={'rememberMe'} type="checkbox" component={Input}/> remember me
            </div>

            {props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}

            <div>
                <button>
                    Login
                </button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Navigate to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}


export default compose(
    connect(mapStateToProps, {login, logout}),
)(Login)