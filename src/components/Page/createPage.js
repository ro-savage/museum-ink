import React, {Component, PropTypes} from 'react'

import css from './styles'

export default class CreatePage extends Component {

  constructor (props) {
    super(props)

    this.handleCreate = this.handleCreate.bind(this)
  }

  getName () {
    return this.refs.pageName.value
  }

  handleCreate () {
    const {onCreate} = this.props
    onCreate({
      name: this.getName(),
    })
  }

  render () {
    return <div className={css.CreatePage}>
      <input type='text' ref='pageName' />
      <button onClick={this.handleCreate}>Create</button>
    </div>
  }
}

CreatePage.displayName = 'CreatePage'

CreatePage.propTypes = {
  onCreate: PropTypes.func.isRequired,
}
