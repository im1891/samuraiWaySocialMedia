import { v1 } from 'uuid'
import { ProfilePageReducerACTypes } from './profilePage-reducer'

let initialState = {
	dialogs: [
		{
			id: v1(),
			name: 'Dimych',
			photoURL: 'https://www.meme-arsenal.com/memes/a857391da22dc0c69390c57198468d8a.jpg'
		},
		{
			id: v1(),
			name: 'Sasha',
			photoURL: 'https://www.meme-arsenal.com/memes/a857391da22dc0c69390c57198468d8a.jpg'
		},
		{
			id: v1(),
			name: 'Viktor',
			photoURL: 'https://www.meme-arsenal.com/memes/a857391da22dc0c69390c57198468d8a.jpg'
		},
		{
			id: v1(),
			name: 'Sveta',
			photoURL: 'https://www.meme-arsenal.com/memes/a857391da22dc0c69390c57198468d8a.jpg'
		},
		{
			id: v1(),
			name: 'Valera',
			photoURL: 'https://www.meme-arsenal.com/memes/a857391da22dc0c69390c57198468d8a.jpg'
		}
	] as DialogType[],
	messages: [
		{ id: v1(), message: 'Hi' },
		{ id: v1(), message: 'How are you?' },
		{ id: v1(), message: 'yo' }
	] as MessageType[]
}

export const dialogsPageReducer = (
	state: DialogsReducerStateType = initialState,
	action: DialogsPageReducerACTypes | ProfilePageReducerACTypes
): DialogsReducerStateType => {
	switch (action.type) {
		case 'DIALOGS/ADD-MESSAGE':
			let newMessage: MessageType = { id: v1(), message: action.payload.messageText }
			return { ...state, messages: [...state.messages, newMessage] }

		default:
			return state
	}
}

//actions
export const addMessage = (messageText: string) =>
	({
		type: 'DIALOGS/ADD-MESSAGE',
		payload: { messageText }
	} as const)

//types
export type DialogsPageReducerACTypes = ReturnType<typeof addMessage>

export type MessageType = {
	id: string
	message: string
}

export type DialogType = {
	id: string
	name: string
	photoURL: string
}

export type DialogsReducerStateType = typeof initialState
