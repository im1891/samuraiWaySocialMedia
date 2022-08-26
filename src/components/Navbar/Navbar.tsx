import React from "react";
import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <nav className={style.nav}>

            <div className={style.item}>
                <NavLink to='/profile'
                         className={({isActive}) => isActive ? `${style.active}` : undefined}> Profile</NavLink>
            </div>


            <div className={style.item}>
                <NavLink to='/dialogs'
                         className={({isActive}) => isActive ? `${style.active}` : undefined}>Messages</NavLink>
            </div>
            <div className={style.item}>
                <a>News</a>
            </div>
            <div className={style.item}>
                <a>Music</a>
            </div>

        </nav>
    )

}

export default Navbar;