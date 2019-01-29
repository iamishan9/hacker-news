import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Comment from './Comment';
import { LoginPage } from './LoginPage';
import TopStories from './TopStories';

import ROUTES from '../routes/routes';
import { PrivateRoute } from '../routes/PrivateRoute';

import '../App.css';

/**
 * This is just a functional component.
 *
 * @returns {object}
 */
const Main = () => {
  return (
    <Router basename="/hacker-news">
      <div className="main ">
        <Switch>
          <Route exact path={ROUTES.ROOT} component={LoginPage} />
          <PrivateRoute path={ROUTES.HOME} component={TopStories} />
          <PrivateRoute path={'/:id'} component={props => <Comment {...props} />} />
        </Switch>
      </div>
    </Router>
  );
};

export default Main;
