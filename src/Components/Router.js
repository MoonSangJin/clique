import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from '../Routes/Home';
import Detail from '../Routes/Detail';
// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Router>
    <Route path="/" exact component={Home} />
    <Route path="/detail" component={Detail} />
  </Router>
);
