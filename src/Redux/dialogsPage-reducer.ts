import {v1} from "uuid";
import {profilePageReducerACTypes} from "./profilePage-reducer";

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MEESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'


export type dialogsPageReducerACTypes = ReturnType<typeof addMessageActionCreator> |
    ReturnType<typeof updateNewMessageTextActionCreator>

export type MessageType = {
    id: string
    message: string
}

export type DialogType = {
    id: string
    name: string
    avatar: string
}

export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
    messageText: string
}
let initialState: DialogsPageType = {
    dialogs: [

        {
            id: v1(),
            name: 'Dimych',
            avatar: 'https://www.meme-arsenal.com/memes/a857391da22dc0c69390c57198468d8a.jpg'
        },
        {
            id: v1(),
            name: 'Sasha',
            avatar: 'https://www.meme-arsenal.com/memes/a857391da22dc0c69390c57198468d8a.jpg'
        },
        {
            id: v1(),
            name: 'Viktor',
            avatar: 'https://www.meme-arsenal.com/memes/a857391da22dc0c69390c57198468d8a.jpg'
        },
        {
            id: v1(),
            name: 'Sveta',
            avatar: 'https://www.meme-arsenal.com/memes/a857391da22dc0c69390c57198468d8a.jpg'
        },
        {
            id: v1(),
            name: 'Valera',
            avatar: 'https://www.meme-arsenal.com/memes/a857391da22dc0c69390c57198468d8a.jpg'
        },
    ],
    messages: [

        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'How are you?'},
        {id: v1(), message: 'yo'},
    ],
    messageText: ''
}
export const dialogsPageReducer = (state: DialogsPageType = initialState, action: dialogsPageReducerACTypes | profilePageReducerACTypes) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage: MessageType = {id: v1(), message: state.messageText}
            state = {...state, messages: [...state.messages, newMessage], messageText: ''}
            return state
        case UPDATE_NEW_MEESSAGE_TEXT:
            state = {...state, messageText: action.messageText}
            return state
        default:
            return state
    }

}

export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE
} as const)


export const updateNewMessageTextActionCreator = (messageText: string) => ({
    type: UPDATE_NEW_MEESSAGE_TEXT,
    messageText
} as const)

