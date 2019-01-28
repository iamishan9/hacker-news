import React from 'react';

import { PropagateLoader } from 'react-spinners';
/**
 *
 * @returns {object}.
 */
const Spinner = () => (
  <div className='spinner-container'>
    <PropagateLoader color={'#4285F4'} />
  </div>
);

export default Spinner;
