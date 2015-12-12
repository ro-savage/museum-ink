import {compose, createStore, applyMiddleware} from 'redux';
import {persistentStore} from 'redux-pouchdb';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

import PouchDB from 'pouchdb';
const db = new PouchDB('http://museumink.cloudant.com/museumink', {
  auth: {
    username: 'amesserallesiduseemandsh',
    password: 'bc8b4eddb563ab21d8ec6ee89bac4121dd49ed51',
  },
});

const applyMiddlewares = applyMiddleware(
  thunk,
  promise,
  createLogger());
 
const createStoreWithMiddleware = compose(
  applyMiddlewares,
  persistentStore(db))(createStore);

import reducer from './reducers';

export default function configureStore (initialState) {
  const store = createStoreWithMiddleware(reducer, initialState);

  console.log(store);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

