import React from 'react';
import {createRoot} from 'react-dom/client';
import {getStrRand} from './utils.js';
import App from './app.js';
import Store from './store.js';

const store = new Store({
  "list": [
    {number: 1, code: getStrRand(), title: "Название элемента"},
    {number: 2, code: getStrRand(), title: "Некий объект"},
    {number: 3, code: getStrRand(), title: "Заголовок"},
    {number: 4, code: getStrRand(), title: "Очень длинное название элемента из семи слов"},
    {number: 5, code: getStrRand(), title: "Запись"},
    {number: 6, code: getStrRand(), title: "Шестая запись"},
    {number: 7, code: getStrRand(), title: "Седьмая запись"}
  ]
});

const root = createRoot(document.getElementById('root'));

store.subscribe(() => {
  root.render(<App store={store}/>);
});

// Первый рендер приложения
root.render(<App store={store}/>);
