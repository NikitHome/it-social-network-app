import React from 'react';
import style from './Interlocutor.module.css';
import {NavLink} from "react-router-dom";

const Interlocutor = (props) => {
    return (
        <div>
            <div className={style.interlocutorName}>
                <NavLink to={'/Dialogs/'}
                         path={'/Dialogs/' + props.id}>
                    {props.name}
                </NavLink>
            </div>
        </div>
    )
}

export default Interlocutor;