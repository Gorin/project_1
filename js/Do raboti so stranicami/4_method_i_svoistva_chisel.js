'use strict';

// Документация по строкам https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String
// Документация по числам https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number
// Методы строк https://learn.javascript.ru/string
// Методы чисел https://learn.javascript.ru/number

const str = 'text';
console.log(str.legth);

const arr = [1, 2, 3];
console.log(arr.length);

const text = 'text';
console.log(text.toUpperCase());

//
// "ПОИСК ПОДСТРОКИ" 
//
const fruit = 'Some fruit';
console.log(fruit.indexOf('fruit')); // Вывод 5
console.log(fruit.indexOf('q')); // Вывод -1

const logg = 'ПЕПЕГА НЬЮС KEKW';
console.log(logg.slice(12, 16)); // Вырезаем KEKW
console.log(logg.slice(12)); // Вырезаем KEKW
console.log(logg.substring(12, 16)); // Вырезаем KEKW
console.log(logg.substr(12, 4)); // Вырезаем KEKW

//
// ЧИСЛА
//

const num = 12.2;
console.log(Math.round(num));

const test = '12.2px';
console.log(parseInt(test));
console.log(parseFloat(test));