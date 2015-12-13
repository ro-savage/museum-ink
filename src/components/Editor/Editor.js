import React, {Component, PropTypes} from 'react'

import css from './styles'
import Header from './Header'
import Edit from './Edit'
import Preview from './Preview'

export default class Editor extends Component {
  render () {
    const {
      name, content,
      onLoad, onSave, onCreate,
      onEditContent,
    } = this.props

    return <div className={css.Editor}>
      <h2 className={css.heading}>Editing page: {name}</h2>
      <Header
        name={name}
        content={content}
        onLoad={onLoad}
        onSave={onSave}
        onCreate={onCreate}
      />
      <Edit
        content={content}
        onChange={onEditContent}
      />
      <Preview
        content={content}
      />
    </div>
  }
}

Editor.displayName = 'Editor'

Editor.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,

  onEditContent: PropTypes.func.isRequired,
  onLoad: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onCreate: PropTypes.func.isRequired,
}
