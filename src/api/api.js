import axios from 'axios';
const BASE_URL = 'https://hacker-news.firebaseio.com/v0/';

/**
 *
 * @returns {object}
 * @param {*} storiesType
 */
export const getStoriesIndexArray = storiesType => {
  return axios
    .get(`${BASE_URL}${storiesType}.json`)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err;
    });
};

/**
 *
 * @returns {promise}
 * @param {string} id
 */
export const getItem = id => {
  return axios
    .get(`${BASE_URL}item/${id}.json`)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err;
    });
};

/**
 * @param {*} commentId
 * @returns
 */
export async function getComments(commentId) {
  const newsData = await axios.get(`${BASE_URL}item/${commentId}.json`);

  return Promise.resolve(newsData);
}

export const STORY_TYPE = {
  TOP_STORIES: 'topstories'
};
