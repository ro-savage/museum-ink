import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import PageList from './PageList'
import CreatePage from './CreatePage'
import {getPage, getPages, createPage} from '../../stores/page/actions'

class PageListContainer extends Component {
  render () {
    const {pages} = this.props

    return <div>
      <CreatePage
        onCreate={createPage}
      />
      <br /><br />
      <PageList
        pages={pages}
      />
    </div>
  }
}

PageListContainer.displayName = 'PageListContainer'

PageListContainer.propTypes = {
  // redux
  pages: PropTypes.object,

  // actions
  getPage: PropTypes.func.isRequired,
  getPages: PropTypes.func.isRequired,
  createPage: PropTypes.func.isRequired,
}

function mapStateToProps (state) {
  return {
    pages: state.pages,
  }
}

const actions = {
  getPage: getPage,
  getPages: getPages,
  createPage: createPage,
}

export default connect(mapStateToProps, actions)(PageListContainer)
