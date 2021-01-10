import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from '../Routes/Home';
import Detail from '../Routes/Detail';
import SignIn from '../Routes/SignIn';
import SignUp from '../Routes/SignUp';
import Gnb from './Gnb';


const RootRouter = () => (
  <Router>
    <Gnb />

    <Route path="/" exact component={Home} />
    <Route path="/detail/" component={Detail} />
    <Route path="/sign-in/" component={SignIn} />
    <Route path="/sign-up/" component={SignUp} />
  </Router>
);

export default RootRouter;
