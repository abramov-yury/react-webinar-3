import React from 'react';
import PropTypes from 'prop-types';
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

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string,
  })).isRequired,
  onDelete: PropTypes.func,
  onSelect: PropTypes.func,
}

List.defaultProps = {
  onDelete: () => {},
  onSelect: () => {},
}

export default List;
