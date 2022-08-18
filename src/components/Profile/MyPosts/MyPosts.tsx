import React from "react";
import style from './MyPosts.module.css';
import {Post} from "./Post/Post";

function MyPosts() {
    return (
        <div className={style.posts}>
            My Posts
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add</button>
                </div>
            </div>
            <Post message='Hi, how are you?' likesCount={15}/>
            <Post message={'It\'s my firs post.'} likesCount={20}/>

        </div>
    )
}

export default MyPosts;