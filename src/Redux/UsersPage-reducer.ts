const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const SET_USERS = 'SET-USERS';

type FollowACType = ReturnType<typeof followAC>
type UnfollowACType = ReturnType<typeof unfollowAC>
type SetUsersACType = ReturnType<typeof setUsersAC>

export type UsersPageReducerACTypes = FollowACType | UnfollowACType | SetUsersACType

export type UserType = {
    id: number
    photoURL: string
    followed: boolean
    fullName: string
    status: string
    location: {
        country: string
        city: string
    }
}

export type UsersPageType = {
    users: UserType[]
}

let initialState: UsersPageType = {
    users: []
}

export const usersPageReducer = (state: UsersPageType = initialState, action: UsersPageReducerACTypes): UsersPageType => {
    switch (action.type) {
        case FOLLOW_USER: {
            return {...state, users: state.users.map(u => u.id === action.payload.userId ? {...u, followed: true} : u)}
        }
        case UNFOLLOW_USER: {
            return {...state, users: state.users.map(u => u.id === action.payload.userId ? {...u, followed: false} : u)}
        }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.payload.users]}
        }
        default:
            return state
    }
}


export const followAC = (userId: number) => {

    return {
        type: FOLLOW_USER,
        payload: {
            userId
        }
    } as const
}


export const unfollowAC = (userId: number) => {

    return {
        type: UNFOLLOW_USER,
        payload: {
            userId
        }
    } as const
}


export const setUsersAC = (users: UserType[]) => {

    return {
        type: SET_USERS,
        payload: {
            users
        }
    } as const
}