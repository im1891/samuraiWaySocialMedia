import { v1 } from "uuid";
import { ProfileEvents } from "../events";
import { usersAPI } from "../api/api";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "../store/redux-store";

export type ProfilePageReducerACTypes =
  | ReturnType<typeof addPostActionCreator>
  | ReturnType<typeof updateNewPostTextActionCreator>
  | ReturnType<typeof setUserProfile>;

/*
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";
*/

export type UserProfileType = {
  aboutMe: string;
  contacts: {
    facebook: string;
    website: string;
    vk: string;
    twitter: string;
    instagram: string;
    youtube: string;
    github: string;
    mainLink: string;
  };
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  userId: number;
  photos: {
    small: string;
    large: string;
  };
};

export type PostType = {
  id: string;
  message: string;
  likesCount: number;
};

export type ProfilePageType = {
  posts: PostType[];
  postMessage: string;
  userProfile: null | UserProfileType;
};

type ProfilePageThunkType = ThunkAction<
  void,
  AppStateType,
  unknown,
  ProfilePageReducerACTypes
>;

let initialState: ProfilePageType = {
  posts: [
    { id: v1(), message: "Hi, how are you?", likesCount: 15 },
    { id: v1(), message: "It's my firs post.", likesCount: 20 },
  ],
  postMessage: "",
  userProfile: null,
};

export const profilePageReducer = (
  state: ProfilePageType = initialState,
  action: ProfilePageReducerACTypes /*| dialogsPageReducerACTypes*/
): ProfilePageType => {
  switch (action.type) {
    case ProfileEvents.ADD_POST:
      let newPost: PostType = {
        id: v1(),
        message: state.postMessage,
        likesCount: 0,
      };
      state = { ...state, posts: [...state.posts, newPost], postMessage: "" };
      return state;
    case ProfileEvents.UPDATE_NEW_POST_TEXT:
      state = { ...state, postMessage: action.postText };
      return state;
    case ProfileEvents.SET_USER_PROFILE:
      return { ...state, userProfile: action.payload.userProfile };
    default:
      return state;
  }
};

export const addPostActionCreator = () =>
  ({
    type: ProfileEvents.ADD_POST,
  } as const);

export const updateNewPostTextActionCreator = (postText: string) =>
  ({
    type: ProfileEvents.UPDATE_NEW_POST_TEXT,
    postText,
  } as const);

const setUserProfile = (userProfile: UserProfileType) => {
  return {
    type: ProfileEvents.SET_USER_PROFILE,
    payload: {
      userProfile,
    },
  } as const;
};

export const getUserProfile = (userId: string): ProfilePageThunkType => {
  return (dispatch) => {
    usersAPI.getUserProfile(userId).then((userProfile) => {
      dispatch(setUserProfile(userProfile));
    });
  };
};
