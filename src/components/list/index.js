import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

import Item from "../item";


function List({list, addProducts}){
  return (
    <ul className="List">{
      list.map(item =>
        <li key={item.code} className="List-item">
          <Item item={item} onClick={addProducts} buttonText="Добавить"/>
        </li>
      )}
    </ul>
  )
}

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number
  })).isRequired,
  addProducts: PropTypes.func.isRequired,
};

export default React.memo(List);

