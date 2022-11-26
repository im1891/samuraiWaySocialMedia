import {
  combineReducers,
  compose,
  legacy_createStore as createStore,
  Store,
} from "redux";
import { profilePageReducer } from "../reducers/profilePage-reducer";
import { dialogsPageReducer } from "../reducers/dialogsPage-reducer";
import { sideBarReducer } from "../reducers/sideBar-reducer";
import { usersPageReducer } from "../reducers/usersPage-reducer";
import { authReducer } from "../reducers/auth-reducer";

/*type ActionsTypes = ProfilePageReducerACTypes | dialogsPageReducerACTypes;*/
export type AppStateType = ReturnType<typeof rootReducer>;
export type StoreType = Store<AppStateType>;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  profilePage: profilePageReducer,
  dialogsPage: dialogsPageReducer,
  sideBar: sideBarReducer,
  usersPage: usersPageReducer,
  authData: authReducer,
});

export const store: StoreType = createStore(rootReducer, composeEnhancers());

// @ts-ignore
window.store = store;
