import * as constants from './constants';

export function saveContent (content) {
  return {
    type: constants.SAVE_CONTENT,
    payload: content,
  };
}
