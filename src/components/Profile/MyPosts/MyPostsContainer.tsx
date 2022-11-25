import { MyPosts } from "./MyPosts";
import React from "react";
import {
  addPostActionCreator,
  PostType,
  ProfilePageReducerACTypes,
  updateNewPostTextActionCreator,
} from "../../../reducers/profilePage-reducer";
import { connect } from "react-redux";
import { AppStateType } from "../../../store/redux-store";
import { Dispatch } from "redux";

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
  postMessage: string;
};

type MapDispatchPropsType = {
  updateNewPostText: (postText: string) => void;
  addPost: () => void;
};

export type MyPotsPropsType = MapStatePropsType & MapDispatchPropsType;

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    posts: state.profilePage.posts,
    postMessage: state.profilePage.postMessage,
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<ProfilePageReducerACTypes>
): MapDispatchPropsType => {
  return {
    updateNewPostText: (postText) => {
      dispatch(updateNewPostTextActionCreator(postText));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};

export const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);
