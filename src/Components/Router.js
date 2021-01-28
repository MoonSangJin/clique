import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Routes/Home';
import Detail from '../Routes/Detail';
import SignIn from '../Routes/SignIn';
import SignUp from '../Routes/SignUp';
import Gnb from './Gnb';

import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './Router.css';

const RootRouter = () => (
  <Router>
    <Gnb />
    <Route
      render={({ location }) => {
        console.log(location);
        return (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={450} classNames="fade">
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route path="/detail/:folderId" component={Detail} />
                <Route path="/sign-in/" component={SignIn} />
                <Route path="/sign-up/" component={SignUp} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        );
      }}
    ></Route>
  </Router>
);

export default RootRouter;
