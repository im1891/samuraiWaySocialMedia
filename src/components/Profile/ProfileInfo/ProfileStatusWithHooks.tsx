import React, { ChangeEvent, useState } from 'react'

type ProfileStatusPropsType = {
	status: string
	updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks: React.FC<ProfileStatusPropsType> = ({ status, updateStatus }) => {
	const [editMode, setEditMode] = useState(false)
	const [newStatus, setNewStatus] = useState(status)
	const deactivateEditMode = () => {
		setEditMode(false)

		if (newStatus !== status) {
			if (!newStatus.length) {
				setNewStatus(status)
			}
			updateStatus(newStatus.length ? newStatus : status)
		}
	}

	const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
		setNewStatus(e.currentTarget.value)
	}

	const activateEditMode = () => {
		setEditMode(true)
	}
	return (
		<div>
			{editMode ? (
				<div>
					<span>Status: </span>
					<input type="text" value={newStatus} onBlur={deactivateEditMode} onChange={onStatusChange} autoFocus />
				</div>
			) : (
				<div>
					<span>Status: </span>
					<span onDoubleClick={activateEditMode}>{status}</span>
				</div>
			)}
		</div>
	)
}
