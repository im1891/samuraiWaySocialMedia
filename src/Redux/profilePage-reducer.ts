import {v1} from "uuid";
import {dialogsPageReducerACTypes} from "./dialogsPage-reducer";

export type profilePageReducerACTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export type PostType = {
    id: string
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: PostType[]
    postMessage: string
}
let initialState: ProfilePageType = {
    posts: [

        {id: v1(), message: 'Hi, how are you?', likesCount: 15},
        {id: v1(), message: 'It\'s my firs post.', likesCount: 20},
    ],
    postMessage: ''
}
export const profilePageReducer = (state: ProfilePageType = initialState, action: profilePageReducerACTypes | dialogsPageReducerACTypes) => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {id: v1(), message: state.postMessage, likesCount: 0}
            state = {...state, posts: [...state.posts, newPost], postMessage: ''}
            return state
        case UPDATE_NEW_POST_TEXT:
            state = {...state, postMessage: action.postText}
            return state
        default:
            return state
    }
}


export const addPostActionCreator = () => ({
        type: ADD_POST
    } as const
)

export const updateNewPostTextActionCreator = (postText: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    postText
} as const)
