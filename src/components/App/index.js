import React, {Component, PropTypes} from 'react'

export default class App extends Component {
  render () {
    const {children} = this.props

    return <div>
      <h1>App</h1>
      {children}
    </div>
  }
}

App.displayName = 'App'

App.propTypes = {
  children: PropTypes.node,
}
