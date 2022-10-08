import {combineReducers, legacy_createStore as createStore, Store} from "redux";
import {profilePageReducer, ProfilePageReducerACTypes} from "./profilePage-reducer";
import {sideBarReducer} from "./sideBar-reducer";
import {dialogsPageReducer, dialogsPageReducerACTypes} from "./dialogsPage-reducer";
import {usersPageReducer} from "./UsersPage-reducer";

type ActionsTypes = ProfilePageReducerACTypes | dialogsPageReducerACTypes
export type AppStateType = ReturnType<typeof rootReducer>
export type StoreType = Store<AppStateType, ActionsTypes>


const rootReducer = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    sideBar: sideBarReducer,
    usersPage: usersPageReducer,
})

export const store: StoreType = createStore(rootReducer)