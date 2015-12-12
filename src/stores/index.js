import {compose, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import PouchDB from 'pouchdb';

import reducer from './reducers';

const createStoreWithMiddleware = applyMiddleware(
  thunk,
  promise,
  createLogger())(createStore);;

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

