export const INCREMENT = 'INCREMENT';
export const USER_CREATE = 'USER_CREATE'
export const USER_GET_ALL = 'USER_GET_ALL'

export function increment() {
  return {
    type: INCREMENT,
  };
}


// user create
export function userCreate(username) {
	return {
		type: USER_CREATE,
		username
	}
}

// user create
export function userGetAll(username) {
	return {
		type: USER_GET_ALL,
		username
	}
}
