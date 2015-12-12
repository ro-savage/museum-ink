import React, {Component, PropTypes} from 'react'

import css from './styles'
import Header from './Header'
import Edit from './Edit'
import Preview from './Preview'

export default class Editor extends Component {
  constructor (props) {
    super(props)

    this.handleEditContent = this.handleEditContent.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }

  handleEditContent (content) {
    const {name, onEdit} = this.props
    onEdit({name, content})
  }

  handleCancel () {
    const {content} = this.props
    this.setState({content})
  }

  render () {
    const {name, content, onSave} = this.props

    return <div className={css.Editor}>
      <h2 className={css.heading}>Editing page: {name}</h2>
      <Header
        name={name}
        content={content}
        onSave={onSave}
        onCancel={this.handleCancel}
      />
      <Edit
        content={content}
        onChange={this.handleEditContent}
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
  onSave: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
}
