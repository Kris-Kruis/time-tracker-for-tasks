import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'

import './Watcher.css';

function Watcher({ being }) {
  const watcherClasses = classNames({
    'watcher': true,
    [`watcher__${being}`]: Boolean(being),
  });

  return (
    <div className={watcherClasses}></div>
  );
}

Watcher.propTypes = {
  being: PropTypes.string,
};

Watcher.defaultProps = {
  being: null,
};

export default Watcher;
