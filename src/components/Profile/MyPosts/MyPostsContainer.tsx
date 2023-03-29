import { MyPosts } from "./MyPosts";
import React, { ComponentType } from "react";
import { addPost, PostType } from "../../../reducers/profilePage-reducer";
import { connect } from "react-redux";
import { AppStateType } from "../../../store/redux-store";
import { compose } from "redux";

/*
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


}*/

type MapStatePropsType = {
  posts: PostType[];
};

type MapDispatchPropsType = {
  addPost: (postMessage: string) => void;
};

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType;

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    posts: state.profilePage.posts,
  };
};

export default compose<ComponentType>(connect(mapStateToProps, { addPost }))(
  MyPosts
);
