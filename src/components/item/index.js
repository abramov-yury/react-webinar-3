import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './style.css';

import Button from '../button/index.js';

function Item (props) {

  const [count, setCount] = useState(0);

  const callbacks = {
    addItem : (evt) => {
      evt.stopPropagation();
      props.addItem(props.item.code);
    }
  }

  return (
    <div className='Item'>
      <div className='Item-code'>{props.item.code}</div>
      <div className='Item-title'>
        <span>{props.item.title}</span>
      </div>
      <div className='Item-price'><span>{`${props.item.price} ₽`}</span></div>
      <div className='Item-actions'>
        <Button onClick={callbacks.addItem} text="Добавить" />
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
  addItem: PropTypes.func,
}

Item.defaultProps = {
  addItem: () => {},
}

export default React.memo(Item);
