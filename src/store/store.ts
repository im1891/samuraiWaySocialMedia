import { AnyAction, applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import { profilePageReducer } from 'reducers/profilePage-reducer'
import { dialogsPageReducer } from 'reducers/dialogsPage-reducer'
import { sideBarReducer } from 'reducers/sideBar-reducer'
import { usersPageReducer } from 'reducers/usersPage-reducer'
import { authReducer } from 'reducers/auth-reducer'
import thunkMiddleware, { ThunkAction } from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { appReducer } from 'reducers/appReducer'

export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
	profilePage: profilePageReducer,
	dialogsPage: dialogsPageReducer,
	sideBar: sideBarReducer,
	usersPage: usersPageReducer,
	authData: authReducer,
	app: appReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))

export type AppThunk = ThunkAction<void, AppStateType, unknown, AnyAction>
// @ts-ignore
window.store = store
