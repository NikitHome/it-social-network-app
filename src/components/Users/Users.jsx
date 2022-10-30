import React from "react";
import style from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={style.main}>
            <div className={style.page}>
                {pages.map(page => {
                    return (
                        <span className={props.currentPage === page ? style.selectedPage : style.active}
                              onClick={(e) => {
                                  props.onPageChanged(page)
                              }}>{page}</span>
                    )
                })}
            </div>
            {
                props.users.map(u =>
                    <div key={u.id} className={style.users}>
                                <span>
                                    <div>
                                        <NavLink to={'/Profile/' + u.id}>
                                        <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                             className={style.userAvatar}
                                             alt='text'/>
                                        </NavLink>
                                    </div>
                                    <div className={style.user}>
                                        {u.followed
                                            ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                                      onClick={() => {
                                                          props.unfollow(u.id)
                                                      }}>Unfollow</button>
                                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                                      onClick={() => {
                                                          props.follow(u.id)
                                                      }}>Follow</button>}
                                            </div>
                                            </span>
                        <span className={style.userInfo}>
                                            <span>
                                            <div>
                                            {u.name}
                                            </div>
                                            <div>
                                            {u.status}
                                            </div>
                                            </span>
                                            </span>
                    </div>
                )
            }
        </div>
    )
}

export default Users;