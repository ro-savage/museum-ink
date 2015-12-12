import {combineReducers} from 'redux';
import {persistentReducer} from 'redux-pouchdb';

import text from './text/reducer';

export default persistentReducer(combineReducers({
  text: text,
}));

