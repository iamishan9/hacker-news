import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

import Spinner from './Spinner';
import { getItem } from '../api/api';

import '../App.css';

/**
 * This class is for rendering the stories in list.
 *
 * @class ListItem
 * @extends {Component}
 */
class ListItem extends Component {
  /**
   * Creates an instance of ListItem.
   *
   * @param {object} props
   * @memberof ListItem
   */
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      position: this.props.position,
      by: undefined,
      url: undefined,
      score: undefined,
      title: undefined,
      descendants: undefined,

      idLoaded: false
    };
  }

  /**
   *
   *
   * @memberof ListItem
   */
  componentDidMount = async () => {
    const data = await getItem(this.state.id);

    this.setState({
      by: data.by,
      id: data.id,
      url: data.url,
      score: data.score,
      title: data.title,
      descendants: data.descendants,

      idLoaded: true
    });
  };

  /**
   *
   *
   * @returns {object}
   * @memberof Post
   */
  render() {
    return !this.state.idLoaded ? (
      <Spinner />
    ) : (
      <div className="post-item clearfix">
        <div className="post-left left clearfix">
          <div className="left post-position">{this.state.position}.</div>
        </div>
        <div className="left post-right clearfix">
          <div className="post-top-section clearfix">
            <div className="left post-title">
              <a href={this.state.url}>{this.state.title}</a>
            </div>
          </div>

          <div className="post-bottom-section clearfix">
            <div className="post-points left">{this.state.score} points</div>

            <div className="post-by left">
              By
              <Link to="#"> {this.state.by}</Link>
            </div>

            <div className="post-comment left">
              <Link to="#">{this.state.descendants} comments</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ListItem.propTypes = {
  id: PropTypes.number
};

export default ListItem;

