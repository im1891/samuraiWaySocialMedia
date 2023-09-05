import { ProfilePageReducerACTypes } from './profilePage-reducer'
import { DialogsPageReducerACTypes, DialogType } from './dialogsPage-reducer'
import { v1 } from 'uuid'

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
		}
	] as DialogType[]
}

export const sideBarReducer = (
	state: SideBarType = initialState,
	action: ProfilePageReducerACTypes | DialogsPageReducerACTypes
): SideBarType => {
	return state
}

//types
export type SideBarType = typeof initialState
