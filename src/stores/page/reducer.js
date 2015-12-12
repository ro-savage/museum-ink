import * as constants from './constants'
import _ from 'lodash'

const initialState = {
  pages: {},
}

export default function (state = initialState, action) {
  switch (action.type) {

    case constants.SET_PAGE: {
      state = _.clone(state)
      const page = action.payload
      state.pages[page.id] = page
      return state
    }

    case constants.SET_PAGES: {
      return {
        pages: action.payload,
      }
    }

    default: {
      return state
    }
  }
}
