import React from 'react';
import './style.css';

import Item from '../item/index.js';

function List ({list, onDelete, onSelect}) {


  return (
    <div className="List">
      {
        list.map(item =>
          <div key={item.code} className='List-item'>
            <Item item={item} onDelete={onDelete} onSelect={onSelect}/>
          </div>
        )
      }
    </div>
  )
}

export default List;
