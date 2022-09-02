import {NavLink} from "react-router-dom";
import React from "react";
import {DialogType} from "../../../Redux/state";
import style from './DialogsItem.module.css'


export const DialogItem: React.FC<DialogType> = (props) => {

    const {name, id, avatar} = props;

    return (
        <div className={style.dialog} key={id}>
            <img src={avatar} alt="avatar"/>
            <NavLink to={`/dialog/${id}`}>{name}</NavLink>
        </div>
    )
}
