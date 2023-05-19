import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Button (props) {
  return (
    <button className="Button" onClick={props.onClick}>{props.text}</button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default React.memo(Button);

