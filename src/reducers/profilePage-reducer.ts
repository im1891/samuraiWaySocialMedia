import { v1 } from 'uuid'
import { profileAPI, usersAPI } from 'api/api'
import { AppThunk } from 'store/store'

let initialState = {
	posts: [
		{ id: v1(), message: 'Hi, how are you?', likesCount: 15 },
		{ id: v1(), message: "It's my firs post.", likesCount: 20 }
	] as PostType[],
	userProfile: null as null | UserProfileType,
	status: ''
}

export const profilePageReducer = (
	state: ProfileReducerStateType = initialState,
	action: ProfilePageReducerACTypes /*| dialogsPageReducerACTypes*/
): ProfileReducerStateType => {
	switch (action.type) {
		case 'PROFILE/ADD-POST':
			let newPost: PostType = {
				id: v1(),
				message: action.payload.postMessage,
				likesCount: 0
			}
			return { ...state, posts: [...state.posts, newPost] }

		case 'PROFILE/SET-USER-PROFILE':
			return { ...state, userProfile: action.payload.userProfile }

		case 'PROFILE/SET-STATUS':
			return { ...state, status: action.payload.status }

		default:
			return state
	}
}

//Actions
export const addPost = (postMessage: string) => ({ type: 'PROFILE/ADD-POST', payload: { postMessage } } as const)
const setUserProfile = (userProfile: UserProfileType) =>
	({ type: 'PROFILE/SET-USER-PROFILE', payload: { userProfile } } as const)
const setStatus = (status: string) => ({ type: 'PROFILE/SET-STATUS', payload: { status } } as const)

//Thunks
export const getUserProfile = (userId: number): AppThunk => {
	return (dispatch) => {
		usersAPI.getUserProfile(userId).then((userProfile) => {
			dispatch(setUserProfile(userProfile))
		})
	}
}

export const getStatus = (userId: number): AppThunk => {
	return (dispatch) => {
		profileAPI.getStatus(userId).then((status) => {
			status === null ? dispatch(setStatus('Пока без статуса')) : dispatch(setStatus(status))
		})
	}
}

export const updateStatus = (status: string): AppThunk => {
	return (dispatch) => {
		profileAPI.updateStatus(status).then((res) => {
			res.resultCode === 0 && dispatch(setStatus(status))
		})
	}
}

//Types
export type ProfileReducerStateType = typeof initialState

export type ProfilePageReducerACTypes =
	| ReturnType<typeof addPost>
	| ReturnType<typeof setUserProfile>
	| ReturnType<typeof setStatus>

export type UserProfileType = {
	aboutMe: string
	contacts: {
		facebook: string
		website: string
		vk: string
		twitter: string
		instagram: string
		youtube: string
		github: string
		mainLink: string
	}
	lookingForAJob: boolean
	lookingForAJobDescription: string
	fullName: string
	userId: number
	photos: {
		small: string
		large: string
	}
}

export type PostType = {
	id: string
	message: string
	likesCount: number
}
