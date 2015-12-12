import React, {Component, PropTypes} from 'react'

import css from './styles'

export default class Header extends Component {

  constructor (props) {
    super(props)

    this.handleSave = this.handleSave.bind(this)
    this.handleLoad = this.handleLoad.bind(this)
  }

  getName () {
    return this.refs.pageName.value
  }

  handleLoad () {
    const {onLoad} = this.props
    onLoad(this.getName())
  }

  handleSave () {
    const {content, onSave} = this.props
    onSave({
      name: this.getName(),
      content: content,
    })
  }

  render () {
    return <div className={css.Header}>
      <input type='text' ref='pageName' />
      <button onClick={this.handleLoad}>Load</button>
      <button onClick={this.handleSave}>Save</button>
    </div>
  }
}

Header.displayName = 'CreatePage'

Header.propTypes = {
  onSave: PropTypes.func.isRequired,
  onLoad: PropTypes.func.isRequired,
  content: PropTypes.string,
}
