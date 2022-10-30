import React from 'react';
import style from './Dialogs.module.css';
import Interlocutor from "./Interlocutor/Interlocutor";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControl/ForrmsControl";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => <Interlocutor name={dialog.name} key={dialog.id}
                                                                    id={dialog.id}/>);
    let messagesElements = state.messages.map(message => <Message message={message.message} key={message.id}
                                                                  id={message.id}/>);

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    return (
        <div className={style.interlocutorsItem}>
            <div className={style.interlocutorItem}>
                <div className={style.dialogsElements}>
                    {dialogsElements}
                </div>
            </div>
            <div className={style.dialogs}>
                <div>
                    {messagesElements}
                </div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    );
}

let maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.messageForm}>
            <div className={style.messageTextarea}>
                <Field component={Textarea} validate={[required, maxLength50]} name={"newMessageBody"}
                       placeholder={"Enter your message"}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;