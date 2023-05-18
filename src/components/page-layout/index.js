import React from 'react';
import './style.css';

import Head from '../head/index.js';
import Controls from '../controls/index.js';
import List from '../list/index.js';

function PageLayout ({head, controls, content}) {
  return (
    <div className='PageLayout'>
      <div className='PageLayout-head'>
        {head}
      </div>
      <div className='PageLayout-controls'>
        {controls}
      </div>
      <div className='PageLayout-center'>
        {content}
      </div>
    </div>
  )
}

export default PageLayout;
