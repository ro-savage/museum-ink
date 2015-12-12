import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class App extends Component {
  render () {
    const {children} = this.props;

    return <div>
      <h1>App</h1>
      {children}
    </div>;
  }
}

App.displayName = 'App';

App.propTypes = {
  children: PropTypes.node,
};

export default connect(state => state)(App);
