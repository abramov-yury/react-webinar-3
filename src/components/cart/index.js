import React from 'react';
import {cn as bem} from '@bem-react/classname';

import Item from '../item/index.js';

import './style.css';

import Button from '../button/index.js';

function Cart (props) {
  const cn = bem('Cart');
  const {cart, closeCart} = props;

  const renderItemTemplate = (item) => {
    return (
      <Item />
    )
  }

  const renderContentTemplate = () => {
    if(!cart.items.length) {
      return (<p className={cn('message')}>Ваша корзина пуста</p>);
    }

    return (<p className={cn('message')}>Ваша корзина полна</p>);
  }

  return (
    <div className={cn()}>
      <div className={cn('inner')}>
        <div className={cn('head')}>
          <span className={cn('title')}>Корзина</span>
          <Button text="Закрыть" onClick={closeCart} />
        </div>
        <div className={cn('content')}>
          {renderContentTemplate()}
        </div>
      </div>
    </div>
  )
}

export default React.memo(Cart);
