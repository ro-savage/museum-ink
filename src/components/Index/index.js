import React, {Component, PropTypes} from 'react';

import css from './styles';

export default class Index extends Component {
  render () {
    return <div className={css.container}>
      <h2 className={css.heading}>Index</h2>
    </div>;
  }
}

Index.displayName = 'Index';
