import React, {useCallback, useState} from 'react';
import './styles.css';

import Head from './components/head/index.js';
import List from './components/list/index.js';
import Controls from './components/controls/index.js';
import PageLayout from './components/page-layout/index.js';
import Modal from './components/modal/index.js';

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */

// useCallback - запоминает функцию внутри компонента

function App({store}) {

  const list = store.getState().list;
  const [products, setProducts] = useState(store.cart.products.length);
  const [isCartActive, switchCart] = useState(store.cart.active);
  const [cost, setCost] = useState(store.cart.cost)

  const callbacks = {
    addProduct : useCallback((item) => {
      store.addProduct(item, setProducts, setCost);
    }, [store]),
    deleteProduct : useCallback((item) => {
      store.deleteProduct(item, setProducts, setCost);
    }, [store]),
    toggleCart : useCallback(() => {
      store.toggleCart(switchCart);
    }, [store]),
  }


  const renderControls = () => {
    return (
      <Controls quantity={products} cost={cost} openCart={callbacks.toggleCart}/>
    )
  }

  const renderCart = () => {
    return (
      isCartActive && <Modal cart={store.cart} closeCart={callbacks.toggleCart} deleteProduct={callbacks.deleteProduct}/>
    )
  }

  return (
    <div className="App">
      <PageLayout>
        <Head title="Магазин" />
        {renderControls()}
        <List list={list} addProducts={callbacks.addProduct}/>
      </PageLayout>
      {renderCart()}
    </div>
  );
}

export default App;
