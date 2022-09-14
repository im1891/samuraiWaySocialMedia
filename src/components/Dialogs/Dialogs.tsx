import React, {ChangeEvent, KeyboardEvent} from "react";
import style from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsPageType} from "../../Redux/store";

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    updateNewMessageText: (messageText: string) => void
    addMessage: () => void
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const {dialogsPage, updateNewMessageText, addMessage} = props;

    let dialogsElements = dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}
                                                                   avatar={d.avatar}/>)
    let messagesElements = dialogsPage.messages.map(m => <Message key={m.id} message={m.message}/>)

    const changeMessageTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let messageText = e.currentTarget.value
        updateNewMessageText(messageText)
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
                        value={dialogsPage.messageText}
                        onKeyPress={onEnterPressHandler}>

                    </textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Add</button>
                </div>

            </div>
        </div>

    )
}

