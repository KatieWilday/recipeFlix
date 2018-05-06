import { takeLatest, call, put } from 'redux-saga/effects';

import {
  USER_GET_ALL,
  USER_GET_ALL_ERROR,
  USER_GET_ALL_SUCCESS,
} from 'actions/user';
import api from 'api';

// get all users
function createGetUserAll(isServer = false) {
  return function* (options) { // eslint-disable-line consistent-return
    try {
      const data = yield call(() => api.getUserAll(options.id));
      const action = { type: USER_GET_ALL_SUCCESS, data };

      if (isServer) {
        return action;
      }

      yield put(action);
    } catch (error) {
      const action = { type: USER_GET_ALL_ERROR, error };

      if (isServer) {
        return action;
      }

      yield put(action);
    }
  };
}


export const userGetAll = createGetUserAll();
export const userGetAllServer = createGetUserAll(true);

export function* getUserAllWatcher() {
  yield takeLatest(USER_GET_ALL, userGetAll);
}

export default [getUserAllWatcher()];
