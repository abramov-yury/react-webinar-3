import React from 'react';
import './style.css';

import Counter from '../counter/index.js';

function Item ({item, onDelete, onSelect}) {
  return (
    <div className={'Item' + (item.selected ? ' Item_selected' : '')}
         onClick={() => onSelect(item.code)}>
      <div className='Item-code'>{item.number}</div>
      <div className='Item-title'>
        <span>{item.title}</span>
        {item.attentionCounter ? <Counter number={item.attentionCounter} />  : ""}
      </div>
      <div className='Item-actions'>
        <button className='Item-button' onClick={() => onDelete(item.code)}>
          Удалить
        </button>
      </div>
    </div>
  )
}

export default Item;
