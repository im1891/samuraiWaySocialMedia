import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
  Store,
} from "redux";
import {
  profilePageReducer,
  ProfilePageReducerACTypes,
} from "../reducers/profilePage-reducer";
import {
  dialogsPageReducer,
  DialogsPageReducerACTypes,
} from "../reducers/dialogsPage-reducer";
import { sideBarReducer } from "../reducers/sideBar-reducer";
import {
  usersPageReducer,
  UsersPageReducerACTypes,
} from "../reducers/usersPage-reducer";
import { authReducer, AuthReducerACTypes } from "../reducers/auth-reducer";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

type ActionsTypes =
  | ProfilePageReducerACTypes
  | DialogsPageReducerACTypes
  | UsersPageReducerACTypes
  | AuthReducerACTypes;

export type AppStateType = ReturnType<typeof rootReducer>;
export type StoreType = Store<AppStateType, ActionsTypes>;

const rootReducer = combineReducers({
  profilePage: profilePageReducer,
  dialogsPage: dialogsPageReducer,
  sideBar: sideBarReducer,
  usersPage: usersPageReducer,
  authData: authReducer,
});

export const store: StoreType = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

// @ts-ignore
window.store = store;
