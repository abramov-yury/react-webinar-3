import React from 'react';
import './styles.css';

import Head from './components/head/index.js';
import List from './components/list/index.js';
import Controls from './components/controls/index.js';

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */

function App({store}) {

  const list = store.getState().list;

  return (
    <div className='App'>
      <div className='App-head'>
        <Head title='Приложение на чистом JS' />
      </div>
      <div className='App-controls'>
        <Controls store={store} />
      </div>
      <div className='App-center'>
        <List store={store} />
      </div>
    </div>
  );
}

export default App;
