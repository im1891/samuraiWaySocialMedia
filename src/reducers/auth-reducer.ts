import { AuthEvents } from "../events";
import { authAPI } from "../api/api";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "../store/redux-store";

type SetUserDataType = ReturnType<typeof setAuthUserData>;
export type AuthReducerACTypes = SetUserDataType;

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

export type AuthThunkType = ThunkAction<
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
      return {
        ...state,
        userData: action.payload.userData,
        isAuth: action.payload.isAuth,
      };
    }
    default:
      return state;
  }
};

export const setAuthUserData = (userData: UserDataType, isAuth: boolean) => {
  return {
    type: AuthEvents.SET_USER_DATA,
    payload: {
      userData,
      isAuth,
    },
  };
};

export const getAuthUserData = (): AuthThunkType => (dispatch) =>
  authAPI.me().then((userData) => {
    userData.resultCode === 0 &&
      dispatch(
        setAuthUserData(
          {
            id: userData.data.id,
            login: userData.data.login,
            email: userData.data.email,
          },
          true
        )
      );
  });

export const login =
  (email: string, password: string, rememberMe: boolean): AuthThunkType =>
  (dispatch) => {
    return authAPI.login(email, password, rememberMe).then((res) => {
      if (res.resultCode === 0) {
        dispatch(getAuthUserData());
      } else if (res.resultCode === 1)
        return Promise.reject("Incorrect email or password");
    });
  };

export const logout = (): AuthThunkType => (dispatch) => {
  authAPI.logout().then((res) => {
    if (res.resultCode === 0) {
      dispatch(setAuthUserData({ email: null, login: null, id: null }, false));
    }
  });
};
