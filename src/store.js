/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.state = initState;
    this.listeners = []; // Слушатели изменений состояния
    this.cart = {
      active: false,
      cost: 0,
      products: [],
    }
  }

  /**
   * Подписка слушателя на изменения состояния
   * @param listener {Function}
   * @returns {Function} Функция отписки
   */
  subscribe(listener) {
    this.listeners.push(listener);
    // Возвращается функция для удаления добавленного слушателя
    return () => {
      this.listeners = this.listeners.filter(item => item !== listener);
    }
  }

  /**
   * Выбор состояния
   * @returns {Object}
   */
  getState() {
    return this.state;
  }

  /**
   * Установка состояния
   * @param newState {Object}
   */
  setState(newState) {
    this.state = newState;
    // Вызываем всех слушателей
    for (const listener of this.listeners) listener();
  }

  /**
   * Открыть корзину, модальное окно появляется в разметке.
   * Закрыть корзину, модальное окно исчезает из разметки.
   */
  toggleCart(switchCart) {
    this.cart.active = !this.cart.active;
    if(this.cart.active) {
      document.body.style.overflowY = 'hidden';
    }
    switchCart(this.cart.active);
  }

  /**
   * Добавление товара в корзину
   * @param item {Object}
   * @param setProducts {Function}
   * @param setCost {function}
   */
  addProduct(item, setProducts, setCost) {
    if (this.cart.products.includes(item)) {
      item.quantity = item.quantity + 1;
    }
    else {
      this.cart.products.push(item);
      item.quantity = 1;
    }

    this.cart.cost += item.price;
    setProducts(this.cart.products.length);
    setCost(this.cart.cost);
  }

  /**
   * Удаление товара из корзины
   * @param item {Object}
   * @param setProducts {Function}
   * @param setCost {function}
   */
  deleteProduct(item, setProducts, setCost) {
    this.cart.products = this.cart.products.filter(product => product !== item);
    this.cart.cost -= (item.price * item.quantity);
    setProducts(this.cart.products.length);
    setCost(this.cart.cost);
  }

  /**
   *  Получить количество товаров в корзине
   */
  getQuantityProducts() {
    if(!this.cart.products.length) return 0;
    let quantity = 0;
    this.cart.products.forEach((item) => {
      quantity += item.quantity;
    });
    return quantity;
  }
}

export default Store;
