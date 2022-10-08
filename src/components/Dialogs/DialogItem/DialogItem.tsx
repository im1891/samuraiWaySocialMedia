import {NavLink} from "react-router-dom";
import React from "react";

import style from './DialogsItem.module.css'
import {DialogType} from "../../../Redux/dialogsPage-reducer";


export const DialogItem: React.FC<DialogType> = (props) => {

    const {name, id, photoURL} = props;

    return (
        <div className={style.dialog}>
            <img src={photoURL} alt="avatar"/>
            <NavLink to={`/dialog/${id}`}>{name}</NavLink>
        </div>
    )
}
