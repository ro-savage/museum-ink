import * as constants from './constants'

const initialState = {
  name: 'DefaultName',
  content: '<p></p>',
}

export default function (state = initialState, action) {
  switch (action.type) {
    case constants.SAVE_CONTENT: {
      return action.payload
    }
    case constants.EDIT_CONTENT: {
      return action.payload
    }
    default: {
      return state
    }
  }
}
