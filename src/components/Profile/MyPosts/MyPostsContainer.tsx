import {MyPosts} from "./MyPosts";
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profilePage-reducer";
import {StoreContext} from "../../../StoreContext";

export const MyPostsContainer = () => {

    return <StoreContext.Consumer>
        {
            store => {
                const updateNewPostText = (postText: string) => {
                    store.dispatch(updateNewPostTextActionCreator(postText))
                }

                const addPost = () => {
                    store.dispatch(addPostActionCreator())
                }

                return <MyPosts posts={store.getState().profilePage.posts}
                                postMessage={store.getState().profilePage.postMessage}
                                updateNewPostText={updateNewPostText} addPost={addPost}/>
            }
        }
    </StoreContext.Consumer>


}