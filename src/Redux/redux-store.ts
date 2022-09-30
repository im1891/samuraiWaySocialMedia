import {combineReducers, legacy_createStore as createStore, Store} from "redux";
import {profilePageReducer, profilePageReducerACTypes} from "./profilePage-reducer";
import {sideBarReducer} from "./sideBar-reducer";
import {dialogsPageReducer, dialogsPageReducerACTypes} from "./dialogsPage-reducer";

type ActionsTypes = profilePageReducerACTypes | dialogsPageReducerACTypes
type ReduxState = ReturnType<typeof reducers>
export type StoreType = Store<ReduxState, ActionsTypes>


const reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    sideBar: sideBarReducer,
})

export const store: StoreType = createStore(reducers)