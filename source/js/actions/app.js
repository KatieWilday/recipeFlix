export const INCREMENT = 'INCREMENT';
export const USER_CREATE = 'USER_CREATE'

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
