import React from 'react';
import {cn as bem} from '@bem-react/classname';
import './style.css';

function Total (props) {

  const cn = bem('Total');

  return(
    <div className={cn()}>
      <span className={cn('left')}>Итого</span>
      <span className={cn('right')}>{props.cost} ₽</span>
    </div>
  )
}

export default React.memo(Total);
