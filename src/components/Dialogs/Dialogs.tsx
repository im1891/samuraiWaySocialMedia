import React from "react";
import style from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsPageType} from "../../Redux/state";

type DialogsPropsType = {
    state: DialogsPageType
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const {state} = props;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>)
    let messagesElements = state.messages.map(m => <Message message={m.message} id={m.id}/>)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
        </div>

    )
}

