import { all } from 'redux-saga/effects';

import peopleSagas from 'sagas/people';
import userSagas from 'sagas/users';

export default function* rootSaga() {
  yield all([
    ...peopleSagas,
    ...userSagas
  ]);
}
