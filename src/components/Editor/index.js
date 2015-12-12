import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import Editor from './Editor'
import {saveContent} from '../../stores/content/actions'

class EditorContainer extends Component {
  render () {
    const {content, saveContent} = this.props

    return <Editor
      content={content}
      onSave={saveContent}
    />
  }
}

EditorContainer.displayName = 'EditorContainer'

EditorContainer.propTypes = {
  // redux
  content: PropTypes.string,

  // actions
  saveContent: PropTypes.func.isRequired,
}

export default connect((state) => {
  return {
    content: state.content.value,
  }
}, {
  saveContent,
})(EditorContainer)
