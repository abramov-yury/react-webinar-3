import React, {useCallback} from 'react';
import './styles.css';

import Head from './components/head/index.js';
import List from './components/list/index.js';
import Controls from './components/controls/index.js';
import PageLayout from './components/page-layout/index.js';
import Cart from './components/cart/index.js';

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
    toggleCart : useCallback(() => {
      store.toggleCart();
    }, [store]),
  }

  return (
    <div className="App">
      <PageLayout>
        <Head title='Магазин' />
        <Controls openCart={callbacks.toggleCart} />
        <List list={list} addItem={callbacks.addItem}/>
      </PageLayout>
      {store.cart.active && <Cart closeCart={callbacks.toggleCart} />}
    </div>
  );
}

export default App;
