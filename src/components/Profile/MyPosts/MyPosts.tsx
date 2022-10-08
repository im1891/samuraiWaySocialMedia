import React, {KeyboardEvent, useRef} from "react";
import style from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {MyPotsPropsType} from "./MyPostsContainer";


export const MyPosts: React.FC<MyPotsPropsType> = (props) => {

    const {posts, postMessage, updateNewPostText, addPost} = props;

    let postsElements = posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    const textAreaRef = useRef<HTMLTextAreaElement>(null)

    const changePostTextHandler = () => {

        textAreaRef.current && updateNewPostText(textAreaRef.current.value)
    }

    const onEnterPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => [
        e.key === 'Enter' && addPostHandler()
    ]

    const addPostHandler = () => {
        addPost()
    }
    return (
        <div className={style.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea ref={textAreaRef} value={postMessage} onChange={changePostTextHandler}
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

