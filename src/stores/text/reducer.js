import * as constants from './constants';

const initialState = {
  value: 'This is the initial text',
};

export default function event (state = initialState, action) {
  switch (action.type) {
  case constants.SET_TEXT: {
    return {
      value: action.payload,
    }
  }
  default: {
    return state;
  }
  }
}
