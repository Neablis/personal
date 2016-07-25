import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/App';
import NoMatch from './components/NoMatch';

import './styles/main.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="*" component={NoMatch}/>
  </Router>
), document.getElementById('root'));
