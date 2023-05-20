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
  const [products, setProducts] = useState(store.getQuantityProducts());
  const [isCartActive, switchCart] = useState(store.cart.active);

  const callbacks = {
    addProduct : useCallback((code) => {
      store.addProduct(code, setProducts);
    }, [store]),
    toggleCart : useCallback(() => {
      store.toggleCart(switchCart);
    }, [store]),
  }


  const renderControls = () => {
    return (
      <Controls quantity={products} cart={store.cart} openCart={callbacks.toggleCart}/>
    )
  }

  const renderCart = () => {
    return (
      isCartActive && <Cart cart={store.cart} closeCart={callbacks.toggleCart} />
    )
  }

  return (
    <div className="App">
      <PageLayout>
        <Head title='Магазин' />
        {renderControls()}
        <List list={list} addProducts={callbacks.addProduct}/>
      </PageLayout>
      {renderCart()}
    </div>
  );
}

export default App;
