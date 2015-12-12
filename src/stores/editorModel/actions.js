import * as constants from './constants'

export function saveContent (editorContentModel) {
  return {
    type: constants.SAVE_CONTENT,
    payload: editorContentModel,
  }
}

export function editContent (editorContentModel) {
  return {
    type: constants.EDIT_CONTENT,
    payload: editorContentModel,
  }
}
