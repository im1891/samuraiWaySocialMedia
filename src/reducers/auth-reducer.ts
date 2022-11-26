import { AuthEvents } from "../events";

type SetUserDataType = ReturnType<typeof setAuthUserData>;
type ActionsTypes = SetUserDataType;

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
  action: ActionsTypes
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
