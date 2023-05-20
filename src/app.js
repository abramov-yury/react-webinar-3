import React, {useCallback, useState} from 'react';
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
  const [cartItems, setCartItems] = useState(store.cart.items.length)

  const callbacks = {
    addItem : useCallback((code) => {
      store.addItem(code, setCartItems);
    }, [store]),
    toggleCart : useCallback(() => {
      store.toggleCart();
    }, [store]),
  }


  const renderControls = () => {
    return (
      <Controls quantity={cartItems} cart={store.cart} openCart={callbacks.toggleCart}/>
    )
  }

  const renderCart = () => {
    return (
      store.cart.active && <Cart closeCart={callbacks.toggleCart} />
    )
  }

  return (
    <div className="App">
      <PageLayout>
        <Head title='Магазин' />
        {renderControls()}
        <List list={list} addItem={callbacks.addItem}/>
      </PageLayout>
      {renderCart()}
    </div>
  );
}

export default App;
