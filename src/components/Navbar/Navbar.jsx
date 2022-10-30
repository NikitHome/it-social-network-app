import React from "react";
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to='/Profile' className={navData => navData.isActive ? style.active : style.item}>
                    Profile
                </NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/Users' className={navData => navData.isActive ? style.active : style.item}>
                    Users
                </NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/Dialogs' className={navData => navData.isActive ? style.active : style.item}>
                    Messages
                </NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/News' className={navData => navData.isActive ? style.active : style.item}>
                    News
                </NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/Music' className={navData => navData.isActive ? style.active : style.item}>
                    Music
                </NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/Settings' className={navData => navData.isActive ? style.active : style.item}>
                    Settings
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar;