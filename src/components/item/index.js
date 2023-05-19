import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './style.css';

import Counter from '../counter/index.js';

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
        {count ? <Counter number={count} /> : ''}
      </div>
      <div className='Item-actions'>
        <button className='Item__button' onClick={callbacks.addItem}>
          Добавить
        </button>
      </div>
    </div>
  )
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    selected: PropTypes.bool,
  }).isRequired,
  addItem: PropTypes.func,
}

Item.defaultProps = {
  addItem: () => {},
}

export default React.memo(Item);
