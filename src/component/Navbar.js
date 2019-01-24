import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../App.css';

/**
 * This class contains Navbar elements.
 *
 * @class Navbar
 * @extends {Component}
 */
class Navbar extends Component {
  /**
   *
   *
   * @returns {object}
   * @memberof Navbar
   */
  render() {
    return (
      <div className="navbar clearfix">
        <div className="logo">
          <Link to="/">Hacker News</Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
