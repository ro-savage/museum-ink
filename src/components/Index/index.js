import React, {Component, PropTypes} from 'react';
import ProseMirror from 'react-prosemirror';

import css from './styles';

const OPTIONS = {
  docFormat: 'html',
  autoInput: true,
  menuBar: true,
  inlineMenu: true,
  buttonMenu: true,
};

export default class Index extends Component {
  constructor (props) {
    super(props);

    this.state = {
			output: '<h2>Hello World!</h2><p>This is an editor.</p>',
    }

    this.updateOutput = this.updateOutput.bind(this);
  }

  componentDidMount () {
		this.updateOutput(this.refs.pm.getContent())
	}

  updateOutput (output) {
		this.setState({output})
  }

  render () {
    const {options, output} = this.state;

    return <div className={css.container}>
      <h2 className={css.heading}>Index</h2>
      <ProseMirror
        ref='pm'
        value={output}
        options={OPTIONS}
        onChange={this.updateOutput}
      />
      <div dangerouslySetInnerHTML={{__html: output}} />
    </div>;
  }
}

Index.displayName = 'Index';
