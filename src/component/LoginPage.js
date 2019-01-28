import React from 'react';

import ROUTES from '../routes/routes';
import auth from '../utils/auth';

/**
 *
 *
 * @param {*} props
 * @returns
 */
export const LoginPage = props => {
  return (
    <div className="login-button">
      <h1>Login Page</h1>
      <button
        onClick={() => {
          auth.login(() => {
            props.history.push(ROUTES.HOME);
          });
        }}
      >
        Login
      </button>
    </div>
  );
};
