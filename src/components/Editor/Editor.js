import React, {Component, PropTypes} from 'react';

import css from './styles';
import Header from './Header';
import Edit from './Edit';
import Preview from './Preview';

export default class Editor extends Component {
  constructor (props) {
    super(props);

    this.state = {
			content: props.content,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleChange (content) {
		this.setState({content});
  }

  handleCancel () {
    const {content} = this.props;
    this.setState({content});
  }

  render () {
    const {content} = this.state;
    const {onSave} = this.props;

    return <div className={css.Editor}>
      <h2 className={css.heading}>Editor</h2>
      <Header
        content={content}
        onSave={onSave}
        onCancel={this.handleCancel}
      />
      <Edit
        content={content}
        onChange={this.handleChange}
      />
      <Preview
        content={content}
      />
    </div>;
  }
}

Editor.displayName = 'Editor';

Editor.propTypes = {
  content: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired,
};
