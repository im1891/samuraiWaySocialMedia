import {v1} from "uuid";

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
}

export type PostType = {
    id: string
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: PostType[]
}

export type SideBarType = {
    dialogs: DialogType[]
}
export type StateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
    sideBar: SideBarType

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
        ]
    },

    profilePage: {
        posts: [

            {id: v1(), message: 'Hi, how are you?', likesCount: 15},
            {id: v1(), message: 'It\'s my firs post.', likesCount: 20},
        ]
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