import { AppThunk } from 'store/store'
import { getAuthUserData } from 'reducers/auth-reducer'

type AppReducerStateType = typeof initialState
const initialState = {
	isInitialized: false
}
export const appReducer = (
	state: AppReducerStateType = initialState,
	action: AppReducerActionsType
): AppReducerStateType => {
	switch (action.type) {
		case 'APP/SET-INITIALIZE':
			return { ...state, isInitialized: action.payload.isInitialized }

		default:
			return state
	}
}

export const setInitialize = (isInitialized: boolean) =>
	({ type: 'APP/SET-INITIALIZE', payload: { isInitialized } } as const)

//thunks
export const initializeApp = (): AppThunk => (dispatch) => {
	dispatch(getAuthUserData()).then(() => dispatch(setInitialize(true)))
}
type AppReducerActionsType = ReturnType<typeof setInitialize>
