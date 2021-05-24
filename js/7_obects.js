'use strict';

const options = {
    name: 'test', // ключ: значение
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    // МЕТОД ОБЪЕКТА
    makeTest: function() {
        console.log('Test');
    }
};

options.makeTest();

// Деструктцризация объектов
// Мы вытаскиваем объект COLORS из объекта OPTIONS и узнаем значение их ключей
const {border, bg} = options.colors;
console.log(border);


// Узнаем количество ключей в объекте.
// console.log(Object.keys(options).length); 
// выводит количество ключей в объекте 'options'. Если убрать .length, то выведется массив со всеми
// ключами объекта options.



// console.log(options.name);

// delete options.name; // Удаляем ключ из объекта

// console.log(options);




//
// Перебор ключей объекта.
//
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key] [i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`); 
//     // Перебираем значения объекта options и получаем значение свойства.
//     }
// }
// console.log(counter);