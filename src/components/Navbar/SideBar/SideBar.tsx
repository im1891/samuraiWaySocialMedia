import React from "react";
import style from "./SideBar.module.css"
import {DialogItem} from "../../Dialogs/DialogItem/DialogItem";
import {SideBarType} from "../../../Redux/store";

type SideBarPropsType = {
    sideBar: SideBarType
}

export const SideBar: React.FC<SideBarPropsType> = (props) => {

    const {sideBar} = props;

    let dialogsElements = sideBar.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>)

    return (
        <div className={style.sideBar}>
            <h3>Friends:</h3>
            <div className={style.items}>
                {dialogsElements}
            </div>
        </div>
    )
}