import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import Editor from './Editor'
import * as editorActions from '../../stores/editor/actions'

class EditorContainer extends Component {
  render () {
    const {
      name, content,
      saveEditor, loadEditor, createEditor,
      setEditorName, setEditorContent,
    } = this.props

    return <Editor
      name={name}
      content={content}
      onLoad={loadEditor}
      onSave={saveEditor}
      onCreate={createEditor}
      onEditName={setEditorName}
      onEditContent={setEditorContent}
    />
  }
}

EditorContainer.displayName = 'EditorContainer'

EditorContainer.propTypes = {
  // redux
  name: PropTypes.string,
  content: PropTypes.string,

  // actions
  saveEditor: PropTypes.func.isRequired,
  createEditor: PropTypes.func.isRequired,
  loadEditor: PropTypes.func.isRequired,
  setEditorName: PropTypes.func.isRequired,
  setEditorContent: PropTypes.func.isRequired,
}

function mapStateToProps (state) {
  return {
    name: state.editor.name,
    content: state.editor.content,
  }
}

const actions = {
  setEditorName: editorActions.setEditorName,
  setEditorContent: editorActions.setEditorContent,
  saveEditor: editorActions.saveEditor,
  createEditor: editorActions.createEditor,
  loadEditor: editorActions.loadEditor,
}

export default connect(mapStateToProps, actions)(EditorContainer)
