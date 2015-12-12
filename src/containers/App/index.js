import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {setText} from '../../stores/text/actions';

class App extends Component {

  constructor (props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    const {setText} = this.props;

    const text = prompt('What is the text');
    setText(text);
  }

  render () {
    const {children, text} = this.props;

    return <div>
      <h1>App: {text}</h1>
      {children}
      <button onClick={this.handleClick}>Set Text</button>
    </div>;
  }
}

App.displayName = 'App';

App.propTypes = {
  children: PropTypes.node,

  // redux
  text: PropTypes.string,
};

export default connect(state => {
  return {
    text: state.text.value,
  };
}, dispatch => {
  return {
    setText: text => dispatch(setText(text)),
  };
})(App)
