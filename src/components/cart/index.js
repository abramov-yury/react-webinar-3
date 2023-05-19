import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Cart({goToCart}) {
  return (
    <div className="Cart">
      <button
        className="Cart__button"
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
