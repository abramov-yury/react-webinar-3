import React from 'react';
import PropTypes from 'prop-types';
import {cn as bem} from '@bem-react/classname';

import './style.css';

function Cart () {
  const cn = bem('Cart');

  return (
    <div className={cn()}>
      <div className={cn('content')}>

      </div>
    </div>
  )
}

export default React.memo(Cart);
