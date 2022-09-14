import React from "react";
import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {SideBar} from "./SideBar/SideBar";
import {SideBarType} from "../../Redux/store";

type NavbarPropsType = {
    sideBar: SideBarType
}

export const Navbar: React.FC<NavbarPropsType> = (props) => {

    const {sideBar} = props;

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
                <SideBar sideBar={sideBar}/>
            </div>

        </nav>
    )

}

