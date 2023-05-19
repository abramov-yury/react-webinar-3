import React, {useCallback} from 'react';

import Head from './components/head/index.js';
import List from './components/list/index.js';
import Cart from './components/cart/index.js';
import PageLayout from './components/page-layout/index.js';

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */

// useCallback - запоминает функцию внутри компонента

function App({store}) {

  const list = store.getState().list;

  const callbacks = {
    addItem : useCallback((code) => {
      store.addItem(code);
    }, [store]),
    onSelect : useCallback((code) => {
      store.selectItem(code);
    }, [store]),
    goToCart : useCallback(() => {
      store.goToCart();
    }, [store])
  }

  return (
    <PageLayout>
      <Head title='Магазин' />
      <Cart goToCart={callbacks.goToCart} />
      <List list={list} addItem={callbacks.addItem} onSelect={callbacks.onSelect}/>
    </PageLayout>
  );
}

export default App;
