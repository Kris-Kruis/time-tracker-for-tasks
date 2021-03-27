import React from 'react';
import PropTypes from 'prop-types';

import './Clock.css';
import { getTimeString } from '../../helpers/counter';

function Clock({ milliseconds }) {
  const timeString = getTimeString(milliseconds);

  return (
    <div className="clock">{timeString}</div>
  );
}

Clock.propTypes = {
  milliseconds: PropTypes.number,
};

Clock.defaultProps = {
  milliseconds: 0,
};

export default Clock;
