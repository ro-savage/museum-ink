import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import Editor from './Editor'
import {saveContent, editContent} from '../../stores/editorModel/actions'

class EditorContainer extends Component {
  render () {
    const {name, content, saveContent, editContent} = this.props

    return <Editor
      name={name}
      content={content}
      onSave={saveContent}
      onEdit={editContent}
    />
  }
}

EditorContainer.displayName = 'EditorContainer'

EditorContainer.propTypes = {
  // redux
  name: PropTypes.string,
  content: PropTypes.string,

  // actions
  saveContent: PropTypes.func.isRequired,
  editContent: PropTypes.func.isRequired,
}

function mapStateToProps (state) {
  return {
    name: state.editorModel.name,
    content: state.editorModel.content,
  }
}

const actions = {
  saveContent: saveContent,
  editContent: editContent,
}

export default connect(mapStateToProps, actions)(EditorContainer)
