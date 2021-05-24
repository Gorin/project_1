'use strict';

const arr = [1, 222, 31, 16, 48];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

// arr.pop(); // удаляет последний элемент массива
// arr.push(10); // Добавляет в конец массива элемент, в данном случае 10
// console.log(arr);

// callback функция c помощью которой, мы можем перебрать массив
arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

// Перебираем элементы массива с помощью цикла
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Перебираем элементы массива с помощью FOR OF
for (let value of arr) {
    console.log(value);
}


// Создаем массив из введенных данных от пользователя.
// После получения данных, выводим их через '; '
const str = prompt('', '');
const products = str.split(', ');
products.sort();
console.log(products.join('; '));