import React from 'react';
import { Route , Switch  } from 'react-router-dom';

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
    <div className="main ">
      <Switch>
        <Route exact path={ROUTES.ROOT} component={TopStories} />
        <Route path ={"/:id"} component={props => <Comment {...props} />} />
      </Switch> 
    </div>
  );
};

export default Main;
