import * as constants from './constants'
import db from '../db'

export function loadEditor (name) {
  return db.get(name).then((doc) => {
    return {
      type: constants.SET_EDITOR,
      payload: {
        name: doc._id,
        content: doc.content,
      },
    }
  })
}

export function saveEditor (editorContentModel) {
  db.get(editorContentModel.name).then((doc) => db.put({
    _id: editorContentModel.name,
    _rev: doc._rev,
    content: editorContentModel.content,
  }))

  return {
    type: constants.SET_EDITOR,
    payload: editorContentModel,
  }
}

export function setEditorName (name) {
  return {
    type: constants.SET_EDITOR_NAME,
    payload: name,
  }
}

export function setEditorContent (content) {
  return {
    type: constants.SET_EDITOR_CONTENT,
    payload: content,
  }
}
