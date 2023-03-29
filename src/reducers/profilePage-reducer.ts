import { v1 } from "uuid";
import { ProfileEvents } from "../events";
import { profileAPI, usersAPI } from "../api/api";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "../store/redux-store";

let initialState: ProfilePageType = {
  posts: [
    { id: v1(), message: "Hi, how are you?", likesCount: 15 },
    { id: v1(), message: "It's my firs post.", likesCount: 20 },
  ],
  userProfile: null,
  status: "",
};
export const profilePageReducer = (
  state: ProfilePageType = initialState,
  action: ProfilePageReducerACTypes /*| dialogsPageReducerACTypes*/
): ProfilePageType => {
  switch (action.type) {
    case ProfileEvents.ADD_POST: {
      let newPost: PostType = {
        id: v1(),
        message: action.postMessage,
        likesCount: 0,
      };
      return { ...state, posts: [...state.posts, newPost] };
    }
    case ProfileEvents.SET_USER_PROFILE: {
      return { ...state, userProfile: action.payload.userProfile };
    }
    case ProfileEvents.SET_STATUS: {
      return { ...state, status: action.payload.status };
    }

    default:
      return state;
  }
};

//Actions
export const addPost = (postMessage: string) =>
  ({
    type: ProfileEvents.ADD_POST,
    postMessage,
  } as const);

const setUserProfile = (userProfile: UserProfileType) => {
  return {
    type: ProfileEvents.SET_USER_PROFILE,
    payload: {
      userProfile,
    },
  } as const;
};

const setStatus = (status: string) =>
  ({
    type: ProfileEvents.SET_STATUS,
    payload: {
      status,
    },
  } as const);

//Thunks
export const getUserProfile = (userId: number): ProfilePageThunkType => {
  return (dispatch) => {
    usersAPI.getUserProfile(userId).then((userProfile) => {
      dispatch(setUserProfile(userProfile));
    });
  };
};

export const getStatus = (userId: number): ProfilePageThunkType => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then((status) => {
      status === null
        ? dispatch(setStatus("Пока без статуса"))
        : dispatch(setStatus(status));
    });
  };
};

export const updateStatus = (status: string): ProfilePageThunkType => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then((res) => {
      res.resultCode === 0 && dispatch(setStatus(status));
    });
  };
};

//Types
export type ProfilePageReducerACTypes =
  | ReturnType<typeof addPost>
  | ReturnType<typeof setUserProfile>
  | ReturnType<typeof setStatus>;

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
  userProfile: null | UserProfileType;
  status: string;
};

type ProfilePageThunkType = ThunkAction<
  void,
  AppStateType,
  unknown,
  ProfilePageReducerACTypes
>;
