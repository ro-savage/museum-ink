import React, {Component} from 'react'

import css from './styles'

export default class PageList extends Component {
  render () {
    return <div className={css.PageList}>
      <p>HERE IS MY LIST</p>
    </div>
  }
}

PageList.displayName = 'PageList'
