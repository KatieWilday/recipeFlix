import { Map } from 'immutable';

import {
  INCREMENT,
  USER_CREATE,
} from 'actions/app';

const initialState = Map({
  counter: 0,
  currentUser: null,
  user: {
    createUserInfo: {
      username: null,
    }
  }
});

const actionsMap = {
  // demo increment counter
  [INCREMENT]: (state) => {
    const counter = state.get('counter') + 1;

    return state.merge(Map({
      counter,
    }));
  },

  /*
   * USER ACTIONS
   */

  // user create
  [USER_CREATE]: (state, action) => {
    console.log('state: ', state)
    console.log('action: ', action)
    console.log('arguments: ', arguments)
    const user = state.get('user')



    user.createUserInfo.username = action.username
    return state.merge(Map({
      user
    }))
  }
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
