import React from 'react'
import style from './Dialogs.module.css'
import { Message } from './Message/Message'
import { DialogItem } from './DialogItem/DialogItem'
import { DialogsPropsType } from './DialogsContainer'
import { AddMessageForm } from './AddMessageForm'

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
	const { dialogs, messages, addMessage } = props

	let dialogsElements = dialogs.map((d) => <DialogItem key={d.id} name={d.name} id={d.id} photoURL={d.photoURL} />)

	let messagesElements = messages.map((m) => <Message key={m.id} message={m.message} />)

	const addNewMessage = (message: string) => {
		addMessage(message)
	}
	return (
		<div className={style.dialogs}>
			<div className={style.dialogsItems}>{dialogsElements}</div>
			<div className={style.messages}>
				{messagesElements}
				<AddMessageForm addNewMessage={addNewMessage} />
			</div>
		</div>
	)
}
