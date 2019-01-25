import React, { Component } from 'react';

import Spinner from './Spinner';
import ListItem from './ListItem';

import { getStoriesIndexArray, STORY_TYPE } from '../api/api';
import { getPosition, getShowStoryList } from '../utils/utils';

import '.././App.css';

/**
 *
 *
 * @class TopStories
 * @extends {Component}
 */
class TopStories extends Component {
  /**
   * Creates an instance of TopStories.
   *
   * @memberof TopStories
   */
  constructor() {
    super();
    this.state = {
      allStoryIdList: [],
      showStoryIdList: [],
      currentPage: 0
    };
  }

  /**
   *
   *
   * @memberof TopStories
   */
  componentDidMount = async () => {
    const newArray = await getStoriesIndexArray(STORY_TYPE.TOP_STORIES);

    this.setState({
      allStoryIdList: newArray,
      showStoryIdList: getShowStoryList(newArray, 0)
    });
  };

  /**
   * @memberof Home
   * @param {Number} incrementFactor
   */
  handleUpdate = incrementFactor => {
    let currentPageNumber = this.state.currentPage;
    currentPageNumber = currentPageNumber + incrementFactor;
    this.setState(
      {
        currentPage: currentPageNumber
      },
      () => {
        this.setState({
          showStoryIdList: getShowStoryList(this.state.allStoryIdList, this.state.currentPage)
        });
      }
    );
  };

  /**
   *
   *
   * @returns {object}
   * @memberof TopStories
   */
  render() {
    const CHANGE_PAGE_STATE = 1;

    return (
      <div>
        <div className="pagination-btn ">
          <button
            disabled={this.state.currentPage === 0 || this.state.currentPage < 0 ? true : false}
            onClick={() => this.handleUpdate(-CHANGE_PAGE_STATE)}
            className="btn-left left "
          >
            ◀
          </button>
          <span className="page-number ">
            {this.state.currentPage+1}
          </span>
          <button onClick={() => this.handleUpdate(CHANGE_PAGE_STATE)} className="btn-right right ">
            ▶
          </button>
        </div>
        {!this.state.showStoryIdList.length ? (
          <Spinner />
        ) : (
          this.state.showStoryIdList.map((storyId, index) => {
            return <ListItem key={storyId} position={getPosition(index, this.state.currentPage)} id={storyId} />;
          })
        )}
      </div>
    );
  }
}

export default TopStories;
