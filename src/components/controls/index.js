import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

import Button from '../button/index.js';

function Controls({goToCart}) {
  return (
    <div className="Controls">
      <div className="Controls-cart">
        <span className="Controls-text">В корзине:</span>
        <span className="Controls-data">пусто</span>
        <Button onClick={goToCart} text="Перейти"/>
      </div>
    </div>
  )
}

Controls.propTypes = {
  goToCart: PropTypes.func,
}

Controls.defaultProps = {
  onAdd: () => {},
}

export default React.memo(Controls);
