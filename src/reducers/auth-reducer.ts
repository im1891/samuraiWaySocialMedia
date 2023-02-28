import { AuthEvents } from "../events";
import { authAPI } from "../api/api";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "../store/redux-store";

type SetUserDataType = ReturnType<typeof setAuthUserData>;
type AuthReducerACTypes = SetUserDataType;

export type UserDataType = {
  email: null | string;
  id: null | number;
  login: null | string;
};
export type AuthStateType = {
  userData: UserDataType;
  isAuth: boolean;
  isFetching: boolean;
};

type AuthThunkType = ThunkAction<
  void,
  AppStateType,
  unknown,
  AuthReducerACTypes
>;

let initialState: AuthStateType = {
  userData: {
    email: null,
    id: null,
    login: null,
  },
  isAuth: false,
  isFetching: false,
};

export const authReducer = (
  state: AuthStateType = initialState,
  action: AuthReducerACTypes
) => {
  switch (action.type) {
    case AuthEvents.SET_USER_DATA: {
      return { ...state, userData: action.payload.userData, isAuth: true };
    }
    default:
      return state;
  }
};

export const setAuthUserData = (userData: UserDataType) => {
  return {
    type: AuthEvents.SET_USER_DATA,
    payload: {
      userData,
    },
  };
};

export const getAuthUserData = (): AuthThunkType => (dispatch) =>
  authAPI.me().then((userData) => {
    userData.resultCode === 0 && dispatch(setAuthUserData(userData.data));
  });
