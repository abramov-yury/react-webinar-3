const propNames = new Set(['id', 'className', 'textContent', 'onclick']);

/**
 * Создание элемента со свойствами и вложенными элементами
 * @param name {String} Название HTML тега
 * @param props {Object} Свойства и атрибуты элемента
 * @param children {...Node} Вложенные элементы
 * @returns {HTMLElement}
 */
export function createElement(name, props = {}, ...children) {
  const element = document.createElement(name);

  // Назначение свойств и атрибутов
  for (const name of Object.keys(props)) {
    if (propNames.has(name)) {
      element[name] = props[name];
    } else {
      element.setAttribute(name, props[name]);
    }
  }

  // Вставка вложенных элементов
  for (const child of children) {
    element.append(child);
  }

  return element;
}

/**
 * Генерация строки из случайных чисел и букв
 */

export function getStrRand () {
  let result = '';
  const words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
  const maxPosition = words.length - 1;

  for (let i = 0; i < 6; i++) {
    let position = Math.floor(Math.random() * maxPosition);
    result = result + words.substring(position, position + 1);
  }

  return result;
}

/**
 * Добавление окончания к существительным
 */

export function makeEnding(number, prefix, one, two, many) {
  const str = number.toString()
  const digit = parseInt(str[str.length - 1], 10);
  if (isNaN(digit)) {return ""}

  if (str.length > 1 && str[str.length - 2] === '1') {return number + " " + prefix + many;}
  if (digit === 1) {return number + " " + prefix + one;}
  else if (digit > 1 && digit <= 4) {return number + " " + prefix + two;}
  else if (digit === 0 || digit >= 5) {return number + " " + prefix + many;}
  else {return ""}
}