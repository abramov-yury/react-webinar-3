/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.state = initState;
    this.listeners = []; // Слушатели изменений состояния
    this.cart = {
      items: [],
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
    switchCart(this.cart.active);
  }

  addProduct(item) {
    if (this.cart.products.includes(item)) {
      item.quantity = item.quantity + 1;
      return;
    }
    this.cart.products.push(item);
    item.quantity = 1;
  }

  /**
   * Добавление товара в корзину
   * @param item {Object}
   * @param setCartItems {Function}
   */
  addItem(item, setCartItems) {
    this.cart.items.push(item);
    this.addProduct(item);
    this.cart.cost += item.price;
    setCartItems(this.cart.items.length);
  };
}

export default Store;
