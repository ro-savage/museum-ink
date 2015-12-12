import * as constants from './constants'

const initialState = {
  name: 'DefaultName',
  content: '<p></p>',
}

export default function (state = initialState, action) {
  switch (action.type) {

    case constants.SET_EDITOR: {
      return action.payload
    }

    case constants.SET_EDITOR_NAME: {
      return {
        name: action.payload,
        content: state.content,
      }
    }

    case constants.SET_EDITOR_CONTENT: {
      return {
        name: state.name,
        content: action.payload,
      }
    }

    default: {
      return state
    }
  }
}
