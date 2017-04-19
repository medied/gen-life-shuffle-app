import React, { PropTypes } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import Other from './Other';

const Root = ({ store }) => (  
  <Router history={browserHistory}>
    <Route path="/" component={App} store={store} />
    <Route path="/index" component={App} store={store} />
    <Route path="/other" component={Other} store={store} />
  </Router>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
