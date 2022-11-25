/*
const FOLLOW_USER = "FOLLOW-USER";
const UNFOLLOW_USER = "UNFOLLOW-USER";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = `SET-CURRENT-PAGE`;
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
*/

import { UsersEvents } from "../events";

type FollowACType = ReturnType<typeof followUser>;
type UnfollowACType = ReturnType<typeof unfollowUser>;
type SetUsersACType = ReturnType<typeof setUsers>;
type setCurrentPageACType = ReturnType<typeof setCurrentPage>;
type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>;
type toggleIsFetchingACType = ReturnType<typeof toggleIsFetching>;

export type UsersPageReducerACTypes =
  | FollowACType
  | UnfollowACType
  | SetUsersACType
  | setCurrentPageACType
  | setTotalUsersCountACType
  | toggleIsFetchingACType;

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
};

let initialState: UsersPageType = {
  users: [],
  pageSize: 5,
  totalUsersCount: 100,
  currentPage: 1,
  isFetching: true,
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

export const followUser = makeActionCreator<
  UsersEvents.FOLLOW_USER,
  { userId: number }
>(UsersEvents.FOLLOW_USER);

export const unfollowUser = (userId: number) => {
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
