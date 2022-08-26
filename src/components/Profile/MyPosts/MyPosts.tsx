import React from "react";
import style from './MyPosts.module.css';
import {Post} from "./Post/Post";

function MyPosts() {
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
            <div className={style.posts}><Post message='Hi, how are you?' likesCount={15}/>
                <Post message={'It\'s my firs post.'} likesCount={20}/>
            </div>

        </div>
    )
}

export default MyPosts;