import { Map } from 'immutable';

import {
  USER_GET_ALL,
  USER_GET_ALL_ERROR,
  USER_GET_ALL_SUCCESS,
} from 'actions/user';

const initialState = Map({
  loading: false,
  error: null,
  users: null,
});

const actionsMap = {

  // user create
  [USER_GET_ALL]: (state) => {

    return state.merge(Map({
      loading: true,
      error: null,
      users: null,
    }))
  },
  [USER_GET_ALL_ERROR]: (state, action) => {

    return state.merge(Map({
      loading: false,
      error: action.error.message,
    }))
  },
  [USER_GET_ALL_SUCCESS]: (state, action) => {

    return state.merge(Map({
      loading: false,
      users: action.data,
    }))
  },

};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
