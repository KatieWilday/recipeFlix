export const USER_GET_ALL = 'USER_GET_ALL'
export const USER_GET_ALL_ERROR = 'USER_GET_ALL_ERROR'
export const USER_GET_ALL_SUCCESS = 'USER_GET_ALL_SUCCESS'

// get all users
export function userGetAll() {
	return {
		type: USER_GET_ALL,
	}
}

// get all users
export function userGetAllError() {
	return {
		type: USER_GET_ALL_ERROR,
	}
}

// get all users
export function userGetAllSucess() {
	return {
		type: USER_GET_ALL_SUCCESS,
	}
}
