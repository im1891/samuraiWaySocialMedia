import React from 'react'
import style from '../Dialogs.module.css'

type MessagPropsType = {
	message: string
}

export const Message: React.FC<MessagPropsType> = (props) => {
	const { message } = props

	return <div className={style.message}>{message}</div>
}
