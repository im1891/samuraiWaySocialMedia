import React from "react";
import style from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {ProfilePageType} from "../../../Redux/state";

type MyPostsPropsType = {
    state: ProfilePageType
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const {state} = props;

    let postsElements = state.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)

    return (
        <div className={style.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add</button>
                </div>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>

        </div>
    )
}

