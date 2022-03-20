'use strict';

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };


// !!!!!
// СОЗДАНИЕ ПОВЕРХНОСТНОЙ КОПИИ ОБЪЕКТОВ
// !!!!!

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}


const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 4,
        y: 7
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;

// console.log(newNumbers);
// console.log(numbers);

// !!!!!
// СОЗДАНИЕ ПОВЕРХНОСТНОЙ КОПИИ ОБЪЕКТОВ
// !!!!!



// !!!!!
// СОЗДАНИЕ ПОВЕРХНОСТНОЙ КОПИИ ОБЪЕКТОВ
// !!!!!

const add = {
    d: 17,
    e: 20
};

const clone = Object.assign({}, add);
clone.d = 20;
// console.log(clone);
// console.log(add);

// !!!!!
// СОЗДАНИЕ ПОВЕРХНОСТНОЙ КОПИИ ОБЪЕКТОВ
// !!!!!


// @@@@
// СОЗДАНИЕ ПОВЕРХНОСТНОЙ КОПИИ МАССИВА
// @@@@

// 1 вариант
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'adadasd';

console.log(newArray);
console.log(oldArray);


// 2 вариант
const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);


// 3 вариант
function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];
log(...num);

// 4 вариант
const array = ['a', 'b'];

const newAarray = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};


// @@@@
// СОЗДАНИЕ ПОВЕРХНОСТНОЙ КОПИИ МАССИВА
// @@@@
