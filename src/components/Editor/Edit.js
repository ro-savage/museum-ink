import React, {Component, PropTypes} from 'react';
import ProseMirror from 'react-prosemirror';

import 'prosemirror/src/menu/menu'
import 'prosemirror/src/menu/menubar'

import css from './styles';

const OPTIONS = {
  docFormat: 'html',
  menuBar: {float: true},
};

export default class Edit extends Component {
  componentDidMount () {
    const {onChange} = this.props;
    if (typeof onChange === 'function') {
      onChange(this.refs.pm.getContent());
    }
	}

  render () {
    const {content, onChange} = this.props;

    return <div className={css.Edit}>
      <ProseMirror
        ref='pm'
        value={content}
        options={OPTIONS}
        onChange={onChange}
      />
    </div>;
  }
}

Edit.displayName = 'Edit';

Edit.propTypes = {
  content: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
