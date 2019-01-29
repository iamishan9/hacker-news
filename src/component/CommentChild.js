import React, { Component } from 'react';

import * as apiFunc from '../api/api';

/**
 * @class Comments
 * @augments {Component}
 */
class CommentChild extends Component {
  /**
   * Creates an instance of Comments.
   *
   * @param {*} props
   * @memberof Comments
   */
  constructor(props) {
    super(props);
    this.state = { CommentChild: [] };
  }

  /**
   * @memberof Comments
   * Recursively calls api for each comments childrens.
   * Sets those childrens in state.
   */
  componentDidMount = () => {
    const { kids } = this.props.data;

    if (kids) {
      kids.forEach(kid => {
        apiFunc
          .getComments(kid)
          .then(data =>
            this.setState({
              CommentChild: [...this.state.CommentChild, data.data]
            })
          )
          .catch(error => error);
      });
    } else {
      this.setState({ errors: 'no CommentChild to display' });
    }
  };

  /**
   *
   *
   * @returns
   * @memberof CommentChild
   */
  render() {
    const { data } = this.props;

    return (
      <div>
        <li className="comment-list" key={data.id} dangerouslySetInnerHTML={{ __html: data.text }} />
        <div className="story-time">createdAt: {new Date(data.time).toLocaleString()}</div>

        {this.state.CommentChild ? (
          this.state.CommentChild.map(value => (
            <div className="child-comment" key={value.id}>
              <CommentChild data={value} key={value.id} />
            </div>
          ))
        ) : (
          <div className="progress progress-bar">
            <div className="indeterminate" />
          </div>
        )}
      </div>
    );
  }
}

export default CommentChild;
