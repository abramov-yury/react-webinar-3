import React from 'react';
import {cn as bem} from '@bem-react/classname';
import './style.css';


function PageLayout ({head, controls, content}) {

  const cn = bem('PageLayout');

  return (
    <div className={cn()}>
      <div className={cn('head')}>
        {head}
      </div>
      <div className={cn('controls')}>
        {controls}
      </div>
      <div className={cn('content')}>
        {content}
      </div>
    </div>
  )
}

export default PageLayout;
