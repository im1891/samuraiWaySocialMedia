import { authAPI } from 'api/api'
import { AxiosError, isAxiosError } from 'axios'
import { AppStateType, AppThunk } from 'store/store'
import { ThunkAction } from 'redux-thunk'
import { AnyAction } from 'redux'

let initialState = {
	userData: {
		email: null,
		id: null,
		login: null
	} as UserDataType,
	isAuth: false,
	isFetching: false
}

export const authReducer = (
	state: AuthReducerStateType = initialState,
	action: AuthReducerACTypes
): AuthReducerStateType => {
	switch (action.type) {
		case 'AUTH/SET-USER-DATA':
			return { ...state, userData: action.payload.userData, isAuth: action.payload.isAuth }
		default:
			return state
	}
}

//actions
export const setAuthUserData = (userData: UserDataType, isAuth: boolean) =>
	({ type: 'AUTH/SET-USER-DATA', payload: { userData, isAuth } } as const)

//thunks
export const getAuthUserData = (): ThunkAction<Promise<void>, AppStateType, any, AnyAction> => (dispatch) => {
	return authAPI.me().then((userData) => {
		if (userData.resultCode === 0) {
			dispatch(setAuthUserData({ id: userData.data.id, login: userData.data.login, email: userData.data.email }, true))
		}
	})
}

export const login =
	(email: string, password: string, rememberMe: boolean): ThunkAction<Promise<void>, AppStateType, any, AnyAction> =>
	(dispatch) => {
		return authAPI
			.login(email, password, rememberMe)
			.then((data) => {
				if (data.resultCode === 0) {
					dispatch(getAuthUserData())
				} else {
					return Promise.reject(data.messages.length > 0 ? data.messages[0] : 'Some error occurred')
				}
			})
			.catch((e: AxiosError<{ message: string }> | string) => {
				if (isAxiosError(e)) {
					return Promise.reject(
						e.response && typeof e.response.data === 'object'
							? e.response.data.message
							: e.message
							? e.message
							: 'Some error occurred'
					)
				} else {
					return Promise.reject(e)
				}
			})
	}

export const logout = (): AppThunk => (dispatch) => {
	authAPI.logout().then((res) => {
		if (res.resultCode === 0) {
			dispatch(setAuthUserData({ email: null, login: null, id: null }, false))
		}
	})
}

//types
type SetUserDataType = ReturnType<typeof setAuthUserData>
export type AuthReducerACTypes = SetUserDataType

export type UserDataType = {
	email: null | string
	id: null | number
	login: null | string
}
export type AuthReducerStateType = typeof initialState
