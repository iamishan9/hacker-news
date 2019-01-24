import React, { Component } from 'react';

import Navbar from './component/Navbar';
import Main from './component/Main';

import './App.css';

/**
 *
 *
 * @class App
 * @extends {Component}
 */
class App extends Component {
  /**
   *
   *
   * @returns {object}
   * @memberof App
   */
  render() {
    return (
      <div className="app-container">
        <Navbar />
        <Main />
      </div>
    );
  }
}

App.propTypes = {};

export default App;
