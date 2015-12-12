import * as constants from './constants'
import db from '../db'

export function saveContent (editorContentModel) {
  db.get('settext1').then((doc) => db.put({
    _id: editorContentModel.name,
    _rev: doc.rev,
    content: editorContentModel.content,
  }))

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