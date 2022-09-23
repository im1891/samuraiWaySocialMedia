import React, {ChangeEvent, KeyboardEvent} from "react";
import style from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsPageType} from "../../Redux/store";
import {
    addMessageActionCreator,
    MessagesActionCreatorsTypes,
    updateNewMessageTextActionCreator
} from "../../Redux/dialogsPage-reducer";

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: MessagesActionCreatorsTypes) => void
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const {dialogsPage, dispatch} = props;

    let dialogsElements = dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}
                                                                   avatar={d.avatar}/>)

    let messagesElements = dialogsPage.messages.map(m => <Message key={m.id} message={m.message}/>)

    const changeMessageTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let messageText = e.currentTarget.value
        dispatch(updateNewMessageTextActionCreator(messageText))
    }

    const onEnterPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        e.key === 'Enter' && addMessageHandler()
    }

    const addMessageHandler = () => {
        dispatch(addMessageActionCreator())
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
                    <button onClick={addMessageHandler}>Add</button>
                </div>

            </div>
        </div>

    )
}

