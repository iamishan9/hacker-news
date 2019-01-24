import React, { Component } from 'react';

import * as apiFunc from '../api/api';
import CommentChild from './CommentChild';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      errors: ''
    };
  }

  componentDidMount() {
    const comments = this.props.history.location.state.data.kids;

    if (comments) {
      comments.forEach(kids => {
        apiFunc
          .getComments(kids)
          .then(data =>
            this.setState({
              comments: [...this.state.comments, data.data]
            })
          )
          .catch(error => error);
      });
    } else {
      this.setState({ errors: 'no comments to display' });
    }
  }

  render() {
    const { comments, errors } = this.state;

    return (
      <div className="container local-container list-container">
        <div className="story-comment-title">{this.props.history.location.state.data.title}</div>
        {comments.length !== 0 ? (
          <ul>
            {comments.map(data => (
              <CommentChild data={data} key={data.id} />
            ))}
          </ul>
        ) : (
          <div> {errors}</div>
        )}
      </div>
    );
  }
}

export default Comment;
