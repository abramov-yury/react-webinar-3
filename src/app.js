import React, {useCallback} from 'react';

import Head from './components/head/index.js';
import List from './components/list/index.js';
import Controls from './components/controls/index.js';
import PageLayout from './components/page-layout/index.js';

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */

// useCallback - запоминает функцию внутри компонента

function App({store}) {

  const list = store.getState().list;

  const onDelete = useCallback((code) => {
    store.deleteItem(code);
  }, [store])

  const onSelect = useCallback((code) => {
    store.selectItem(code);
  }, [store])

  const onAddItem = useCallback(() => {
    store.addItem();
  }, [store])

  return (
    <PageLayout>
      <Head title='Приложение на чистом JS' />
      <Controls onAdd={onAddItem} />
      <List list={list} onDelete={onDelete} onSelect={onSelect}/>
    </PageLayout>
  );
}

export default App;
