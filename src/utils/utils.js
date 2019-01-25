/**
 *
 * @param {number} index
 * @param {number} pageNumber
 * @returns {number}
 */
export const getPosition = (index, pageNumber) => {
  return index + 1 + pageNumber * 30;
};


export /**
 *
 *
 * @param {*} array
 * @param {*} pageNumber
 * @returns
 */
const getShowStoryList = (array, pageNumber) => {
  return array.slice(pageNumber * 25, (pageNumber + 1) * 25);
};
