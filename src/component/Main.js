import React from 'react';
import { Route } from 'react-router-dom';

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
      <Route exact path={ROUTES.ROOT} component={TopStories} />
    </div>
  );
};

export default Main;
