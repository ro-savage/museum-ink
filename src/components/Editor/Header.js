import React, {Component, PropTypes} from 'react'

import css from './styles'

export default class Header extends Component {

  constructor (props) {
    super(props)

    this.handleSave = this.handleSave.bind(this)
  }

  handleSave () {
    const {content, onSave} = this.props
    onSave(content)
  }

  render () {
    const {onCancel} = this.props

    return <div className={css.Header}>
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
