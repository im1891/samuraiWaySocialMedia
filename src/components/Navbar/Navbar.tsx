import React from "react";
import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {SideBar} from "../SideBar/SideBar";
import {SideBarType} from "../../Redux/state";

type NavbarPropsType = {
    state: SideBarType
}

export const Navbar: React.FC<NavbarPropsType> = (props) => {

    const {state} = props;

    return (
        <nav className={style.nav}>

            <div className={style.item}>
                <NavLink to='/profile'
                         className={({isActive}) => isActive ? `${style.active}` : ''}> Profile</NavLink>
            </div>


            <div className={style.item}>
                <NavLink to='/dialogs'
                         className={({isActive}) => isActive ? `${style.active}` : ''}>Messages</NavLink>
            </div>
            <div className={style.item}>
                <a>News</a>
            </div>
            <div className={style.item}>
                <a>Music</a>
            </div>

            <div>
                <SideBar state={state}/>
            </div>

        </nav>
    )

}

