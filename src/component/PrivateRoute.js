import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import auth from '../utils/auth';
import ROUTES from '../routes/routes';

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={
      props => {
        if (auth.isAuthenticated()) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: ROUTES.ROOT,
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }
    }
  />
);
