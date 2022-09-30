import React, {ChangeEvent, KeyboardEvent} from "react";
import style from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogType, MessageType} from "../../Redux/dialogsPage-reducer";

type DialogsPropsType = {
    dialogs: DialogType[]
    messages: MessageType[]
    messageText: string
    updateNewMessageText: (messageText: string) => void
    addMessage: () => void
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const {dialogs, messages, messageText, updateNewMessageText, addMessage} = props;

    let dialogsElements = dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}
                                                       avatar={d.avatar}/>)

    let messagesElements = messages.map(m => <Message key={m.id} message={m.message}/>)

    const changeMessageTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let messageText = e.currentTarget.value
        updateNewMessageText(messageText)
    }

    const onEnterPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        e.key === 'Enter' && addMessageHandler()
    }

    const addMessageHandler = () => {
        addMessage()
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
                        value={messageText}
                        onKeyPress={onEnterPressHandler}>

                    </textarea>
                </div>
                <div>
                    <button onClick={addMessageHandler}>Add</button>
                </div>

            </div>
        </div>

    )
}

