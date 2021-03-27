import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'

import './CustomButton.css';

function CustomButton({ icon, label, isActive, onClick }) {
  const buttonClasses = classNames({
    'custom-button': true,
    'custom-button_disabled': !isActive,
  });
  const iconClasses = classNames({
    'custom-button__icon': true,
    [`custom-button__${icon}-icon`]: Boolean(icon),
  });

  return (
    <div className={buttonClasses} onClick={() => {
      if (isActive) {
        onClick();
      }
    }}>
      { icon && <i className={iconClasses}></i> }
      { label && <span className="custom-button__label">{ label }</span> }
    </div>
  );
}

CustomButton.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

CustomButton.defaultProps = {
  icon: null,
  label: null,
  isActive: true,
  onClick: () => null, 
};

export default CustomButton;
