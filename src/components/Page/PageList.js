import _ from 'lodash'
import React, {Component, PropTypes} from 'react'

import css from './styles'

export default class PageList extends Component {
  render () {
    const {pages, getPages} = this.props

    return <div className={css.PageList}>
      <button onClick={getPages}>Get Pages</button>

      <ul>
        {_.values(pages).map((page) => {
          return <li key={page.id}>
            <a href={`/pages/${page.id}`}>{page.name}</a>
          </li>
        })}
      </ul>
    </div>
  }
}

PageList.displayName = 'PageList'

PageList.propTypes = {
  pages: PropTypes.object,
  getPages: PropTypes.func.isRequired,
}
