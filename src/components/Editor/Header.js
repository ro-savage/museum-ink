import React, {Component, PropTypes} from 'react'

import css from './styles'

export default class Header extends Component {

  constructor (props) {
    super(props)

    this.handleSave = this.handleSave.bind(this)
  }

  handleSave () {
    const {content, onSave} = this.props
    const name = this.refs.pageName.value
    onSave({
      name: name,
      content: content,
    })
  }

  render () {
    const {onCancel} = this.props

    return <div className={css.Header}>
      <input type='text' ref="pageName"/>
      <button onClick={this.handleSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  }
}

Header.displayName = 'Header'

Header.propTypes = {
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  content: PropTypes.string,
}
