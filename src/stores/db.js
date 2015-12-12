import PouchDB from 'pouchdb'
PouchDB.plugin(require('pouchdb-find'))

export default new PouchDB('https://museumink.cloudant.com/museumink', {
  auth: {
    username: 'amesserallesiduseemandsh',
    password: 'bc8b4eddb563ab21d8ec6ee89bac4121dd49ed51',
  },
})
