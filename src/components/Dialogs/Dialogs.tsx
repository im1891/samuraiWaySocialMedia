import React from "react";
import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: number
}

function DialogItem(props: DialogItemPropsType) {
    return (
        <div className={style.dialog}>
            <NavLink to={`/dialig/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

type MessagePropsType = {
    message: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={style.message}>
            {props.message}
        </div>
    )
}

function Dialogs() {

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogItem name='Dimych' id={1}/>
                <DialogItem name='Sasha' id={2}/>
                <DialogItem name='Viktor' id={3}/>
                <DialogItem name='Sveta' id={4}/>
                <DialogItem name='Valera' id={5}/>
            </div>
            <div className={style.messages}>
                <Message message='Hi'/>
                <Message message='How are you?'/>
                <Message message='yo'/>
            </div>
        </div>

    )
}

export default Dialogs;