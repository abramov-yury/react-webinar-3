import React from 'react';
import {cn as bem} from '@bem-react/classname';

import Item from '../item/index.js';

import './style.css';

import Button from '../button/index.js';

function Cart (props) {
  const cn = bem('Cart');
  const {cart, closeCart} = props;

  const removeItem = () => {
    console.log('Удалить элемент из корзины');
  }

  const renderItemTemplate = (item) => {
    return (
      <div key={item.code} className={cn('item')}>
        <Item item={item} onClick={removeItem} quantity={item.quantity} buttonText="Удалить"/>
      </div>
    )
  }

  const renderContentTemplate = () => {
    if(!cart.products.length) {
      return (<p className={cn('message')}>Ваша корзина пуста</p>);
    }

    return cart.products.map((item) => renderItemTemplate(item));
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
