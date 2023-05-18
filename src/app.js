import React from 'react';
import './styles.css';

import Head from './components/head/index.js';
import List from './components/list/index.js';
import Controls from './components/controls/index.js';
import PageLayout from './components/page-layout/index.js';

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */

function App({store}) {

  const list = store.getState().list;

  return (
    <PageLayout
      head={<Head title='Приложение на чистом JS' />}
      controls={<Controls store={store} />}
      content={<List store={store} />}
    />
  );
}

export default App;
