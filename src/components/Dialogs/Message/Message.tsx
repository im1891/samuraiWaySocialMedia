import React from "react";
import style from "../Dialogs.module.css";
import {MessageType} from "../../../Redux/state";


export const Message: React.FC<MessageType> = (props) => {

    const {message, id} = props;


    return (
        <div key={id} className={style.message}>
            {message}
        </div>
    )
}