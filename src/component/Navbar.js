import { Link } from 'react-router-dom';
import React, { Component } from 'react';

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
   * @returns
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
