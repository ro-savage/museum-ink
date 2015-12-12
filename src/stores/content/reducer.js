import * as constants from './constants';

const initialState = {
  value: '<p>This is the initial text</p>',
};

export default function (state = initialState, action) {
  switch (action.type) {
  case constants.SAVE_CONTENT: {
    return {
      value: action.payload,
    }
  }
  default: {
    return state;
  }
  }
}
