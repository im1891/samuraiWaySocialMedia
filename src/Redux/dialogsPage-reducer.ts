import {v1} from "uuid";
import {DialogsPageType, MessageType} from "./store";
import {PostsActionCreatorsTypes} from "./profilePage-reducer";

export type MessagesActionCreatorsTypes = ReturnType<typeof addMessageActionCreator> |
    ReturnType<typeof updateNewMessageTextActionCreator>

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MEESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'


export const dialogsPageReducer = (state: DialogsPageType, action: MessagesActionCreatorsTypes | PostsActionCreatorsTypes) => {
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

