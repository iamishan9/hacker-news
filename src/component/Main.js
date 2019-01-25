import React from 'react';
import { BrowserRouter as Router,  Route , Switch  } from 'react-router-dom';

import Comment from './Comment';
import TopStories from './TopStories';

import ROUTES from '../routes/routes';
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
          <Route exact path={ROUTES.ROOT} component={TopStories} />
          <Route path ={"/:id"} component={props => <Comment {...props} />} />
        </Switch> 
      </div>
    </Router> 
  );
};

export default Main;
