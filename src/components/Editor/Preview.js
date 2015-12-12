import React, {Component, PropTypes} from 'react'

import css from './styles'

export default class Preview extends Component {
  render () {
    const {content} = this.props

    return <div className={css.Preview}>
      <div dangerouslySetInnerHTML={{__html: content}} />
    </div>
  }
}

Preview.displayName = 'Preview'

Preview.propTypes = {
  content: PropTypes.string.isRequired,
}
