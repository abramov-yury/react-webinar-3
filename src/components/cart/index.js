import React from 'react';
import {cn as bem} from '@bem-react/classname';

import './style.css';

import Button from '../button/index.js';

function Cart (props) {
  const cn = bem('Cart');

  return (
    <div className={cn()}>
      <div className={cn('inner')}>
        <div className={cn('head')}>
          <span className={cn('title')}>Корзина</span>
          <Button text="Закрыть" onClick={props.closeCart} />
        </div>
        <div className={cn('content')}>
          <p className={cn('message')}>Ваша корзина пуста</p>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Cart);
