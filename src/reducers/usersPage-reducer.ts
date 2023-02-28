/*
const FOLLOW_USER = "FOLLOW-USER";
const UNFOLLOW_USER = "UNFOLLOW-USER";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = `SET-CURRENT-PAGE`;
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
*/

import { UsersEvents } from "../events";
import { usersAPI } from "../api/api";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "../store/redux-store";

type FollowType = ReturnType<typeof followSucces>;
type UnfollowType = ReturnType<typeof unfollowSucces>;
type SetUsersType = ReturnType<typeof setUsers>;
type setCurrentPageType = ReturnType<typeof setCurrentPage>;
type setTotalUsersCountType = ReturnType<typeof setTotalUsersCount>;
type toggleIsFetchingType = ReturnType<typeof toggleIsFetching>;
type followingInProgressType = ReturnType<typeof toggleFollowingInProgress>;

export type UsersPageReducerACTypes =
  | FollowType
  | UnfollowType
  | SetUsersType
  | setCurrentPageType
  | setTotalUsersCountType
  | toggleIsFetchingType
  | followingInProgressType;

export type UserType = {
  name: string;
  id: number;
  uniqueUrlName: string;
  photos: {
    small: null | string;
    large: null | string;
  };
  status: string;
  followed: boolean;
};

export type UsersPageType = {
  users: UserType[];
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  followingInProgress: number[];
};

type UserPageThunkType = ThunkAction<
  void,
  AppStateType,
  unknown,
  UsersPageReducerACTypes
>;

let initialState: UsersPageType = {
  users: [],
  pageSize: 5,
  totalUsersCount: 100,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

export const usersPageReducer = (
  state: UsersPageType = initialState,
  action: UsersPageReducerACTypes
): UsersPageType => {
  switch (action.type) {
    case UsersEvents.FOLLOW_USER: {
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.payload.userId ? { ...u, followed: true } : u
        ),
      };
    }
    case UsersEvents.UNFOLLOW_USER: {
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.payload.userId ? { ...u, followed: false } : u
        ),
      };
    }
    case UsersEvents.SET_USERS: {
      return {
        ...state,
        users: [...action.payload.users] /*или action.payload.users*/,
      };
    }
    case UsersEvents.SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.payload.newCurrentPage };
    }
    case UsersEvents.SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.payload.totalUsersCount };
    }
    case UsersEvents.TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.payload.isFetching };
    }
    case UsersEvents.TOGGLE_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.payload.status
          ? [...state.followingInProgress, action.payload.userId]
          : state.followingInProgress.filter(
              (id) => id !== action.payload.userId
            ),
      };
    }
    default:
      return state;
  }
};

// Функция для создания action creator
const makeActionCreator = <T extends UsersEvents, P>(type: T) => {
  return (payload: P) => {
    return {
      type,
      payload,
    } as const;
  };
};

export const followSucces = makeActionCreator<
  UsersEvents.FOLLOW_USER,
  { userId: number }
>(UsersEvents.FOLLOW_USER);

export const unfollowSucces = (userId: number) => {
  return {
    type: UsersEvents.UNFOLLOW_USER,
    payload: {
      userId,
    },
  } as const;
};

export const setUsers = (users: UserType[]) => {
  return {
    type: UsersEvents.SET_USERS,
    payload: {
      users,
    },
  } as const;
};

export const setCurrentPage = (newCurrentPage: number) => {
  return {
    type: UsersEvents.SET_CURRENT_PAGE,
    payload: {
      newCurrentPage,
    },
  } as const;
};

export const setTotalUsersCount = (totalUsersCount: number) => {
  return {
    type: UsersEvents.SET_TOTAL_USERS_COUNT,
    payload: {
      totalUsersCount,
    },
  } as const;
};

export const toggleIsFetching = (isFetching: boolean) => {
  return {
    type: UsersEvents.TOGGLE_IS_FETCHING,
    payload: {
      isFetching,
    },
  } as const;
};

export const toggleFollowingInProgress = (status: boolean, userId: number) =>
  ({
    type: UsersEvents.TOGGLE_FOLLOWING_PROGRESS,
    payload: {
      status,
      userId,
    },
  } as const);

export const getUsers = (
  currentPage: number = 1,
  pageSize: number = 5
): UserPageThunkType => {
  return (dispatch, getState) => {
    dispatch(setCurrentPage(currentPage));
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(currentPage, pageSize).then((usersData) => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(usersData.items));
      /*dispatch(setTotalUsersCount(usersData.totalCount))*/
    });
  };
};

export const unfollow = (userId: number): UserPageThunkType => {
  return (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId));
    usersAPI.unfollowUser(userId).then((data) => {
      dispatch(toggleFollowingInProgress(false, userId));
      data.resultCode === 0 && dispatch(unfollowSucces(userId));
    });
  };
};

export const follow = (payload: { userId: number }): UserPageThunkType => {
  return (dispatch) => {
    dispatch(toggleFollowingInProgress(true, payload.userId));
    usersAPI.followUser(payload.userId).then((data) => {
      dispatch(toggleFollowingInProgress(false, payload.userId));
      data.resultCode === 0 && dispatch(followSucces(payload));
    });
  };
};
