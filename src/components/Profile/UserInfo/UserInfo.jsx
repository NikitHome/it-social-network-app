import React from "react";
import style from './UserInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const UserInfo = (props) => {
    if (!props.profile) {
        return (
            <Preloader />
        )
    }

    return(
        <div className={style.content}>
            <div className={style.descriptionBlock}>
                <img src={props.profile.photos.large} alt="user's avatar"/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default UserInfo;