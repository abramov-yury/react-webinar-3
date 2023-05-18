import React from 'react';
import PropTypes, {number} from 'prop-types';
import './style.css';

import Counter from '../counter/index.js';

function Item ({item, onDelete, onSelect}) {
  return (
    <div className={'Item' + (item.selected ? ' Item_selected' : '')}
         onClick={() => onSelect(item.code)}>
      <div className='Item-code'>{item.number}</div>
      <div className='Item-title'>
        <span>{item.title}</span>
        {item.count && <Counter number={item.count} />}
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
    code: PropTypes.string,
    number: PropTypes.number,
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
