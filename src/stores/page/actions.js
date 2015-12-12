import * as constants from './constants'
import db from '../db'
import _ from 'lodash'

export function getPage (id) {
  return db.get(id).then((doc) => {
    return {
      type: constants.SET_PAGE,
      payload: {
        id: doc._id,
        editors: doc.editors,
      },
    }
  })
}

export function getPages (id) {
  return db.find({
    selector: {type: 'page'},
    fields: ['_id', 'name'],
  }).then(({docs}) => {
    const docList = _.map(docs, (page) => {
      return {
        id: page._id,
        name: page.name,
      }
    })

    return {
      type: constants.SET_PAGES,
      payload: _.indexBy(docList, 'id'),
    }
  })
}

export function createPage (page) {
  return db.post({
    name: page.name,
    type: 'page',
  })
}
