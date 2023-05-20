import React, {useState} from 'react';
import {cn as bem} from '@bem-react/classname';

import Item from '../item/index.js';

import './style.css';

import Button from '../button/index.js';

function Cart (props) {
  const cn = bem('Cart');
  const {cart, closeCart} = props;
  const [products, setProducts] = useState(cart.products);

  const deleteProduct = (item) => {
    props.deleteProduct(item);
    setProducts(cart.products);
  }

  const renderProductTemplate = (item) => {
    return (
      <div key={item.code} className={cn('item')}>
        <Item item={item} onClick={deleteProduct} quantity={item.quantity} buttonText="Удалить"/>
      </div>
    )
  }

  const renderContentTemplate = () => {
    if(!products.length) {
      return (<p className={cn('message')}>Ваша корзина пуста</p>);
    }

    return products.map((item) => renderProductTemplate(item));
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
