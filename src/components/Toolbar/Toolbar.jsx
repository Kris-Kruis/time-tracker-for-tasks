import React from 'react';
import PropTypes from 'prop-types';

import './Toolbar.css';
import CustomButton from '../CustomButton';

function Toolbar({ buttons }) {
  return (
    <div className="toolbar">
      { buttons.map((item, idx) => {
          return (
            <CustomButton
              key={idx}
              icon={item.icon}
              isActive={item.isActive}
              onClick={item.onClick}
            />
          );
        })
      }
    </div>
  );
}

Toolbar.propTypes = {
  buttons: PropTypes.array,
};

Toolbar.defaultProps = {
  buttons: [],
};

export default Toolbar;
