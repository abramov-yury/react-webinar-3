import React from 'react';

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
    <PageLayout>
      <Head title='Приложение на чистом JS' />
      <Controls store={store} />
      <List store={store} />
    </PageLayout>
  );
}

export default App;
