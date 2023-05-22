import React from 'react';
import {cn as bem} from '@bem-react/classname';
import './style.css';
import {getPrice} from '../../utils.js';

function Total (props) {

  const cn = bem('Total');

  return(
    <div className={cn()}>
      <span className={cn('left')}>Итого</span>
      <span className={cn('right')}>{getPrice(props.cost)} ₽</span>
    </div>
  )
}

export default React.memo(Total);
