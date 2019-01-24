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
      currentPageNumber: 0
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
   *
   *
   * @returns {object}
   * @memberof TopStories
   */
  render() {
    return (
      <div>
        {!this.state.showStoryIdList.length ? (
          <Spinner />
        ) : (
          this.state.showStoryIdList.map((storyId, index) => {
            return <ListItem key={storyId} position={getPosition(index, this.state.currentPageNumber)} id={storyId} />;
          })
        )}
      </div>
    );
  }
}

export default TopStories;
