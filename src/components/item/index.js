import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {cn as bem} from '@bem-react/classname';
import {getPrice} from '../../utils.js';
import './style.css';

import Button from '../button/index.js';

function Item (props) {

  const cn = bem('Item');
  const [quantity, setQuantity] = useState(props.quantity);


  const callbacks = {
    onClick : (evt) => {
      evt.stopPropagation();
      props.onClick(props.item);
      setQuantity(props.item.quantity);
    }
  }

  return (
    <div className={cn()}>
      <div className={cn('code')}>{props.item.code}</div>
      <div className={cn('title')}>
        <span>{props.item.title}</span>
      </div>
      <div className={cn('price')}><span>{getPrice(props.item.price)} ₽</span></div>
      {props.quantity && <div className={cn('quantity')}>{quantity} шт</div>}
      <div className={cn('actions')}>
        <Button onClick={callbacks.onClick} text={props.buttonText} />
      </div>
    </div>
  )
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    selected: PropTypes.bool,
    price: PropTypes.number,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  quantity: PropTypes.number,
}

export default React.memo(Item);
