import React from "react";
import style from './Post.module.css';

const Post = (props) => {
    return (
        <div className={style.post}>
            <img src='https://banner2.cleanpng.com/20180902/fsr/kisspng-computer-icons-clip-art-user-account-vector-graphi-rounded-svg-png-icon-free-download-458488-onl-5b8c38c4efbf47.005150621535916228982.jpg' alt='text'/>
                {props.message}
            <div className={style.like}>
                <button>
                    {props.likesCount} like
                </button>
            </div>
        </div>
    )
}

export default Post;