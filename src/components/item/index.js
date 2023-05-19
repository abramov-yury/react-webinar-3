import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './style.css';

import Counter from '../counter/index.js';

function Item ({item, onDelete, onSelect}) {

  const [count, setCount] = useState(0);

  const onClick = () => {
    onSelect(item.code);
    if(!item.selected) {
      setCount(count + 1);
    }
  }

  return (
    <div className={'Item' + (item.selected ? ' Item_selected' : '')}
         onClick={onClick}>
      <div className='Item-code'>{item.code}</div>
      <div className='Item-title'>
        <span>{item.title}</span>
        {count ? <Counter number={count} /> : ''}
      </div>
      <div className='Item-actions'>
        <button className='Item-button' onClick={() => onDelete(item.code)}>
          Удалить
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
  onDelete: PropTypes.func,
  onSelect: PropTypes.func,
}

Item.defaultProps = {
  onDelete: () => {},
  onSelect: () => {},
}

export default React.memo(Item);
