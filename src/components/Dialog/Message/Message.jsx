import React from 'react';
import style from './Message.module.css';

const Message = (props) => {
    return (
        <div className={style.messageItem}>
            {props.message}
        </div>
    )
}

export default Message;