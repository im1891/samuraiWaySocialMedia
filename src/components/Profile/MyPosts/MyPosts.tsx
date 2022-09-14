import React, {KeyboardEvent} from "react";
import style from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {ProfilePageType} from "../../../Redux/store";

type MyPostsPropsType = {
    profilePage: ProfilePageType
    updateNewPostText: (postText: string) => void
    addPost: () => void
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const {profilePage, updateNewPostText, addPost} = props;

    let postsElements = profilePage.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    const textAreaRef = React.createRef<HTMLTextAreaElement>();

    const changePostTextHandler = () => {

        textAreaRef.current && updateNewPostText(textAreaRef.current.value)
    }

    const onEnterPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => [
        e.key === 'Enter' && addPost()
    ]

    return (
        <div className={style.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea ref={textAreaRef} value={profilePage.postMessage} onChange={changePostTextHandler}
                              onKeyPress={onEnterPressHandler}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add</button>
                </div>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>

        </div>
    )
}

