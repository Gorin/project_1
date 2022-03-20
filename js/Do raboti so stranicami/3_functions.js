'use strict';

//
// ЗДЕСЬ О ФУНКЦИЯХ И РАБОТА С НИМИ
//

// function showFirstMessage(text) {
//     console.log(text);
// }

// showFirstMessage('Hello kekw');

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    num = 25;
}

showFirstMessage('Hello kekw');
console.log(num);

// function calc(a, b) {
//     return (a + b); // завершение функции. После return функция читать код не будет.
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));


function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log('Hello');
};

logger();

const calc = (a, b) => a + b;

console.log(calc(5, 6));