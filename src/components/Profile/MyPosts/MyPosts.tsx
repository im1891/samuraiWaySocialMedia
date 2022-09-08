import React, {KeyboardEvent} from "react";
import style from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {ProfilePageType} from "../../../Redux/state";

type MyPostsPropsType = {
    state: ProfilePageType
    changeNewPostText: (postText: string) => void
    addPost: () => void
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const {state, changeNewPostText, addPost} = props;

    let postsElements = state.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)

    const textAreaRef = React.createRef<HTMLTextAreaElement>();

    const addPostButtonHandler = () => {
        addPost()
    }

    const changePostTextHandler = () => {
        let postText = textAreaRef.current?.value;
        postText && changeNewPostText(postText)
    }

    const onEnterPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => [
        e.key === 'Enter' && addPost()
    ]

    return (
        <div className={style.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea ref={textAreaRef} value={state.postMessage} onChange={changePostTextHandler}
                              onKeyPress={onEnterPressHandler}></textarea>
                </div>
                <div>
                    <button onClick={addPostButtonHandler}>Add</button>
                </div>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>

        </div>
    )
}

