import {v1} from "uuid";
import {dialogsPageReducer, MessagesActionCreatorsTypes} from "./dialogsPage-reducer";
import {PostsActionCreatorsTypes, profilePageReducer} from "./profilePage-reducer";


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
export type PostType = {
    id: string
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: PostType[]
    postMessage: string
}
export type SideBarType = {
    dialogs: DialogType[]
}
export type StateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
    sideBar: SideBarType

}

/*
let rerenderEntireTree= (state: StateType) => {
    console.log('State changed')
}

export const subscribe = (observer: (state: StateType) => void) => {
    rerenderEntireTree = observer
}


export let state: StateType = {
    dialogsPage: {
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
    },

    profilePage: {
        posts: [

            {id: v1(), message: 'Hi, how are you?', likesCount: 15},
            {id: v1(), message: 'It\'s my firs post.', likesCount: 20},
        ],
        postMessage: ''
    },

    sideBar: {
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
        ]
    }
}


export const updateNewPostText = (postText: string) => {
    state.profilePage.postMessage = postText;
    rerenderEntireTree(state)

}

export const addPost = () => {
    let newPost: PostType = {id: v1(), message: state.profilePage.postMessage, likesCount: 0}
    state.profilePage.posts.push(newPost)
    state.profilePage.postMessage = ''
    rerenderEntireTree(state)

}

export const updateNewMessageText = (messageText: string) => {
    state.dialogsPage.messageText = messageText
    rerenderEntireTree(state)

}

export const addMessage = () => {
    let newMessage: MessageType = {id: v1(), message: state.dialogsPage.messageText}
    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.messageText = ''
    rerenderEntireTree(state)

}*/
export type StoreType = {
    _state: StateType
    _callSubscriber: (store: StoreType) => void
    subscribe: (observer: (store: StoreType) => void) => void
    getState: () => StateType
    dispatch: (action: MessagesActionCreatorsTypes | PostsActionCreatorsTypes) => void
}

export let store: StoreType = {
    _state: {
        dialogsPage: {
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
        },

        profilePage: {
            posts: [

                {id: v1(), message: 'Hi, how are you?', likesCount: 15},
                {id: v1(), message: 'It\'s my firs post.', likesCount: 20},
            ],
            postMessage: ''
        },

        sideBar: {
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
            ]
        }
    },

    _callSubscriber() {
        console.log('State changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    getState() {
        return this._state
    },

    dispatch(action) {
        this._state.profilePage = profilePageReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action)

        this._callSubscriber(this)
    }
}