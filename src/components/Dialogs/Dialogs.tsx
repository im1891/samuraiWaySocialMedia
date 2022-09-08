import React, {ChangeEvent, KeyboardEvent} from "react";
import style from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsPageType} from "../../Redux/state";

type DialogsPropsType = {
    state: DialogsPageType
    changeNewMessageText: (messageText: string) => void
    addMessage: () => void
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const {state, changeNewMessageText, addMessage} = props;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>)
    let messagesElements = state.messages.map(m => <Message message={m.message} id={m.id}/>)

    const changeMessageTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let messageText = e.currentTarget.value
        changeNewMessageText(messageText)
    }

    const addMessageButtonHandler = () => {

        addMessage()
    }

    const onEnterPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        e.key === 'Enter' && addMessage()
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>

                {messagesElements}

                <div>
                    <textarea

                        onChange={changeMessageTextHandler}
                        value={state.messageText}
                        onKeyPress={onEnterPressHandler}>

                    </textarea>
                </div>
                <div>
                    <button onClick={addMessageButtonHandler}>Add</button>
                </div>

            </div>
        </div>

    )
}

