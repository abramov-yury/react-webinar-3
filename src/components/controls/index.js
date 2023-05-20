import React from 'react';
import PropTypes from 'prop-types';
import {plural} from '../../utils.js';
import './style.css';

import Button from '../button/index.js';

function Controls({quantity, cart, openCart}) {

  const getGoodsTemplate = () => {
    const firstPart = `${quantity} ${plural(quantity, {one: 'товар', few: 'товара', many: 'товаров'})}`;
    const secondPart = `${cart.cost} ₽`;

    return (
      `${firstPart} / ${secondPart}`
    )
  }

  const getDataTemplate = () => {

    return (
      <span className="Controls-data">
        {quantity ? getGoodsTemplate() : `пусто`}
      </span>
    )
  }

  return (
    <div className="Controls">
      <div className="Controls-cart">
        <span className="Controls-text">В корзине:</span>
        {getDataTemplate()}
        <Button onClick={openCart} text="Перейти"/>
      </div>
    </div>
  )
}

Controls.propTypes = {
  openCart: PropTypes.func.isRequired,
  cart: PropTypes.object.isRequired,
  quantity: PropTypes.number.isRequired,
}

export default React.memo(Controls);
