// use bluebird as the Promise implementation
require('babel-runtime/core-js/promise').default = require('bluebird');

import 'babel-polyfill'

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, IndexRoute, Route} from 'react-router';
import {Provider} from 'react-redux';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import configureStore from './stores/index';
import App from './containers/App';
import Editor from './components/Editor';

const history = createBrowserHistory();
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route component={App} path='/'>
        <IndexRoute component={Editor} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);

