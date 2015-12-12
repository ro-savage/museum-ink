// bootstrappin
require('babel-runtime/core-js/promise').default = require('bluebird');

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, IndexRoute, Route} from 'react-router';
import {Provider} from 'react-redux';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import configureStore from './stores/index';
import App from './containers/App';
import Index from './components/Index';

const history = createBrowserHistory();
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route component={App} path='/'>
        <IndexRoute component={Index} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);

