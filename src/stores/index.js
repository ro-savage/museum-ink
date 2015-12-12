import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

// stores
import text from './text/reducer';

const rootReducer = combineReducers({
  text,
});

const createStoreWithMiddleware = applyMiddleware(
  thunk,
  promise,
  createLogger()
)(createStore);

export default function configureStore (initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  // if (module.hot) {
  //   // Enable Webpack hot module replacement for reducers
  //   module.hot.accept('../reducers', () => {
  //     const nextRootReducer = require('../reducers');
  //     store.replaceReducer(nextRootReducer);
  //   });
  // }

  return store;
}

