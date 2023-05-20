import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

import Button from '../button/index.js';

function Controls({openCart}) {
  return (
    <div className="Controls">
      <div className="Controls-cart">
        <span className="Controls-text">В корзине:</span>
        <span className="Controls-data">пусто</span>
        <Button onClick={openCart} text="Перейти"/>
      </div>
    </div>
  )
}

Controls.propTypes = {
  openCart: PropTypes.func.isRequired,
}

export default React.memo(Controls);
