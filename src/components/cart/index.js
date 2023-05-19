import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Cart({goToCart}) {
  return (
    <div className="Cart">
      <p className="Cart-info">
        <span className="Cart-text">В корзине:</span>
        <span className="Cart-data">пусто</span>
      </p>
      <button
        className="Cart-button"
        onClick={() => goToCart()}>Перейти</button>
    </div>
  )
}

Cart.propTypes = {
  goToCart: PropTypes.func,
}

Cart.defaultProps = {
  onAdd: () => {},
}

export default React.memo(Cart);
