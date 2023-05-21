import React, {useState} from 'react';
import {cn as bem} from '@bem-react/classname';
import './style.css';

import Item from '../item/index.js';
import Button from '../button/index.js';
import Total from '../total/index.js';

function Cart (props) {
  const cn = bem('Cart');
  const {cart, closeCart} = props;
  const [products, setProducts] = useState(cart.products);
  const [cost, setCost] = useState(cart.cost)

  const deleteProduct = (item) => {
    props.deleteProduct(item);
    setProducts(cart.products);
    setCost(cart.cost);
  }

  const renderProductTemplate = (item) => {
    return (
      <li key={item.code} className={cn('item')}>
        <Item item={item} onClick={deleteProduct} quantity={item.quantity} buttonText="Удалить"/>
      </li>
    )
  }

  const renderContentTemplate = () => {
    if(!products.length) {
      return (<p className={cn('message')}>Ваша корзина пуста</p>);
    }

    return [
      <ul key='cart-products' className={cn('products')}>
        {products.map((item) => renderProductTemplate(item))}
      </ul>,
      <Total key='cart-total' cost={cost} />
    ];
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
