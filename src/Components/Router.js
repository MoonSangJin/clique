import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from '../Routes/Home';
import Detail from '../Routes/Detail';
import SignIn from '../Routes/SignIn';


const RootRouter = () => (
  <Router>
    <Route path="/" exact component={Home} />
    <Route path="/detail/" component={Detail} />
    <Route path="/sign-in/" component={SignIn} />
  </Router>
);


export default RootRouter;
