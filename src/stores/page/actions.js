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
    sort: ['name'],
  }).then((doc) => {
    const docList = _.map(doc, (page) => {
      page.id = page._id
      return page
    })

    return {
      type: constants.SET_PAGES,
      payload: _.indexBy(docList, '_id'),
    }
  })
}

export function createPage (name) {
  return db.post(
    {
      name: name,
    }
  ).then((doc) => {
    console.log(doc)
  })
}
