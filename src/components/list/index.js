import React from 'react';
import './style.css';

import Counter from '../counter/index.js';

function List ({store}) {

  const list = store.getState().list;


  return (
    <div className="List">
      {
        list.map(item =>
          <div key={item.code} className='List-item'>
            <div className={'Item' + (item.selected ? ' Item_selected' : '')}
                 onClick={() => store.selectItem(item.code)}>
              <div className='Item-code'>{item.number}</div>
              <div className='Item-title'>
                <span>{item.title}</span>
                {item.attentionCounter ? <Counter number={item.attentionCounter} />  : ""}
              </div>
              <div className='Item-actions'>
                <button className='Item-button' onClick={() => store.deleteItem(item.code)}>
                  Удалить
                </button>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default List;
