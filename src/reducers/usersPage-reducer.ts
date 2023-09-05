import { usersAPI } from 'api/api'
import { AppThunk } from 'store/store'
import { makeActionCreator } from 'utils'

let initialState = {
	users: [] as UserType[],
	pageSize: 5,
	totalUsersCount: 100,
	currentPage: 1,
	isFetching: false,
	followingInProgress: [] as number[]
}

export const usersPageReducer = (
	state: UsersReducerStateType = initialState,
	action: UsersPageReducerACTypes
): UsersReducerStateType => {
	switch (action.type) {
		case 'USERS/FOLLOW-USER':
			return {
				...state,
				users: state.users.map((u) => (u.id === action.payload.userId ? { ...u, followed: true } : u))
			}

		case 'USERS/UNFOLLOW-USER':
			return {
				...state,
				users: state.users.map((u) => (u.id === action.payload.userId ? { ...u, followed: false } : u))
			}

		case 'USERS/SET-USERS':
			return { ...state, users: [...action.payload.users] /*или action.payload.users*/ }

		case 'USERS/SET-CURRENT-PAGE':
			return { ...state, currentPage: action.payload.newCurrentPage }

		case 'USERS/SET-TOTAL-USERS-COUNT':
			return { ...state, totalUsersCount: action.payload.totalUsersCount }

		case 'USERS/TOGGLE-IS-FETCHING':
			return { ...state, isFetching: action.payload.isFetching }

		case 'USERS/TOGGLE-FOLLOWING-PROGRESS':
			return {
				...state,
				followingInProgress: action.payload.status
					? [...state.followingInProgress, action.payload.userId]
					: state.followingInProgress.filter((id) => id !== action.payload.userId)
			}

		default:
			return state
	}
}

export const followSucces = makeActionCreator<'USERS/FOLLOW-USER', { userId: number }>('USERS/FOLLOW-USER')
export const unfollowSucces = makeActionCreator<'USERS/UNFOLLOW-USER', { userId: number }>('USERS/UNFOLLOW-USER')
export const setUsers = (users: UserType[]) => ({ type: 'USERS/SET-USERS', payload: { users } } as const)
export const setCurrentPage = (newCurrentPage: number) =>
	({ type: 'USERS/SET-CURRENT-PAGE', payload: { newCurrentPage } } as const)
export const setTotalUsersCount = (totalUsersCount: number) =>
	({ type: 'USERS/SET-TOTAL-USERS-COUNT', payload: { totalUsersCount } } as const)
export const toggleIsFetching = (isFetching: boolean) =>
	({ type: 'USERS/TOGGLE-IS-FETCHING', payload: { isFetching } } as const)
export const toggleFollowingInProgress = (status: boolean, userId: number) =>
	({ type: 'USERS/TOGGLE-FOLLOWING-PROGRESS', payload: { status, userId } } as const)

//thunks
export const getUsers = (currentPage: number = 1, pageSize: number = 5): AppThunk => {
	return (dispatch) => {
		dispatch(setCurrentPage(currentPage))
		dispatch(toggleIsFetching(true))
		usersAPI.getUsers(currentPage, pageSize).then((usersData) => {
			dispatch(toggleIsFetching(false))
			dispatch(setUsers(usersData.items))
			/*dispatch(setTotalUsersCount(usersData.totalCount))*/
		})
	}
}

export const unfollow = (payload: { userId: number }): AppThunk => {
	return (dispatch) => {
		dispatch(toggleFollowingInProgress(true, payload.userId))
		usersAPI.unfollowUser(payload.userId).then((data) => {
			dispatch(toggleFollowingInProgress(false, payload.userId))
			data.resultCode === 0 && dispatch(unfollowSucces(payload))
		})
	}
}

export const follow = (payload: { userId: number }): AppThunk => {
	return (dispatch) => {
		dispatch(toggleFollowingInProgress(true, payload.userId))
		return usersAPI.followUser(payload.userId).then((data) => {
			dispatch(toggleFollowingInProgress(false, payload.userId))
			data.resultCode === 0 && dispatch(followSucces(payload))
		})
	}
}

//types
export type UsersPageReducerACTypes =
	| ReturnType<typeof followSucces>
	| ReturnType<typeof unfollowSucces>
	| ReturnType<typeof setUsers>
	| ReturnType<typeof setCurrentPage>
	| ReturnType<typeof setTotalUsersCount>
	| ReturnType<typeof toggleIsFetching>
	| ReturnType<typeof toggleFollowingInProgress>

export type UserType = {
	name: string
	id: number
	uniqueUrlName: string
	photos: {
		small: null | string
		large: null | string
	}
	status: string
	followed: boolean
}

export type UsersReducerStateType = typeof initialState
