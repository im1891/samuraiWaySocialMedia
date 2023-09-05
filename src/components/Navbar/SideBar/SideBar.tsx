import React from 'react'
import style from './SideBar.module.css'
import { DialogItem } from '../../Dialogs/DialogItem/DialogItem'
import { SideBarPropsType } from './SideBarContainer'

export const SideBar: React.FC<SideBarPropsType> = (props) => {
	const { dialogs } = props

	let dialogsElements = dialogs.map((d) => <DialogItem name={d.name} id={d.id} photoURL={d.photoURL} />)

	return (
		<div className={style.sideBar}>
			<h3>Friends:</h3>
			<div className={style.items}>{dialogsElements}</div>
		</div>
	)
}
