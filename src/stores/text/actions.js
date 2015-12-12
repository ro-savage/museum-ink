import * as constants from './constants';

export function setText (text) {
  return {
    type: constants.SET_TEXT,
    payload: text,
  };
}
