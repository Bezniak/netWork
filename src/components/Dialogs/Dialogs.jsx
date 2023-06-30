import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Navigate} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";


const Dialogs = (props) => {

    let state = props.dialogsPage;


    let dialogsElement = state.dialogs.map(d => <DialogItem id={d.id} key={d.id} photo={d.photo}
                                                            name={d.name}/>)
    let messagesElements = state.messages.map(m => <Message key={m.id} message={m.message}/>)
    let newMessageBody = state.newMessageBody;


    if (!props.isAuth) {
        return <Navigate to={"/login"}/>
    }

    const addNewMessage = (values) => {
        props.sendMessageCreator(values.newMessageBody);
    }

    return (
        <>
            <div className={s.dialogs}>
                <div>
                    {dialogsElement}
                </div>
                <div>
                    {messagesElements}
                </div>
            </div>

            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </>

    );
};


const maxLengthCreator50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.messagesItems}>
            <Field
                component={Textarea}
                name='newMessageBody'
                placeholder='Enter your message'
                validate={[requiredField, maxLengthCreator50]}
            />

            <button className={s.btn}>Send</button>
        </form>
    )
}


const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;