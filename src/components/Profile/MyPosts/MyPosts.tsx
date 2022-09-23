import React, {KeyboardEvent, useRef} from "react";
import style from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {ProfilePageType} from "../../../Redux/store";
import {
    addPostActionCreator,
    PostsActionCreatorsTypes,
    updateNewPostTextActionCreator
} from "../../../Redux/profilePage-reducer";

type MyPostsPropsType = {
    profilePage: ProfilePageType
    dispatch: (action: PostsActionCreatorsTypes) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const {profilePage, dispatch} = props;

    let postsElements = profilePage.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    const textAreaRef = useRef<HTMLTextAreaElement>(null)

    const changePostTextHandler = () => {

        textAreaRef.current && dispatch(updateNewPostTextActionCreator(textAreaRef.current.value))
    }

    const onEnterPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => [
        e.key === 'Enter' && addPostHandler()
    ]

    const addPostHandler = () => {
        dispatch(addPostActionCreator())
    }
    return (
        <div className={style.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea ref={textAreaRef} value={profilePage.postMessage} onChange={changePostTextHandler}
                              onKeyPress={onEnterPressHandler}></textarea>
                </div>
                <div>
                    <button onClick={addPostHandler}>Add</button>
                </div>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
}

