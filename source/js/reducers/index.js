import { combineReducers } from 'redux';
import app from 'reducers/app';
import people from 'reducers/people';
import user from 'reducers/user'

export default combineReducers({
  app,
  people,
  user,
});
