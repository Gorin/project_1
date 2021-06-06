'use strict';

const soldier = {
    health: 400,
    armor: 100
};

const jonh = Object.create(soldier);

// const jonh = {
//     health: 100
// };

// Создаем прототип soldier в объекте jonh 
// jonh.__proto__ = soldier; - не используется

// Создаем прототип soldier в объекте jonh
Object.setPrototypeOf(jonh, soldier);

console.log(jonh.armor);