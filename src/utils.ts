// Функция для создания action creator
export const makeActionCreator =
	<T, P>(type: T) =>
	(payload: P) =>
		({ type, payload: { ...payload } } as const)
