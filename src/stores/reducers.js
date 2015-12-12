import {combineReducers} from 'redux'

import editor from './editor/reducer'
import page from './page/reducer'

export default combineReducers({
  editor,
  page,
})

