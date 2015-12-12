import {combineReducers} from 'redux';

import text from './text/reducer';

export default combineReducers({
  text: text,
});
