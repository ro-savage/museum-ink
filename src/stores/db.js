import PouchDB from 'pouchdb'

export default new PouchDB('http://museumink.cloudant.com/museumink', {
  auth: {
    username: 'amesserallesiduseemandsh',
    password: 'bc8b4eddb563ab21d8ec6ee89bac4121dd49ed51',
  },
})
