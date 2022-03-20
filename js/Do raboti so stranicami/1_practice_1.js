// "use strict";

// const numberOfFilms = +prompt("Сколько фильмов?", '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt("Что из последнего?", ""),
//     b = prompt("Оценка?", ""),
//     c = prompt("Что из последнего?", ""),
//     d = prompt("Оценка?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);


// //
// // УСЛОВИЯ
// //


// if (4 !== 3) {
//     console.log("Ok");
// } else {
//     console.log("Error");
// }


// if (num < 49) {
//     console.log("Error");
// } else if (num > 100) {
//     console.log("Много");
// } else {
//     console.log("Ок");
// }

// (num === 50) ? console.log("Да!"): console.log("Нет!");

// switch (num) {
//     case 49:
//         console.log("Не-а");
//         break;
//     case 50:
//         console.log("Ты попал в точку!");
//         break;
//     default:
//         console.log("Попадешь в следующий раз...");
//         break;
// }


// // 
// // ЦИКЛЫ
// //


// let num = 50;

// while (num <= 55) { // пока условие будет выполнятся, будут происходить какие-то действия. Пока num < 55, будет выполняться действие
//     console.log(num);
//     num++; // пока наше условие не выполнено, прибавляй к num +1 за каждый круг цикла
// }

// do { // Сделай пожалуйста что-то...
//     console.log(num);
//     num++;
// }
// while (num <= 55);

// // Самый популярный цикл
// for (let i = 1; i < 8; i++) { // В таком цикле должно быть 3 значения. 1) мы назначаем переменную i = 1; 2) задаем условие i < 8; 3) Говорим, что делать с переменной
//     console.log(num); // Здесь указываем с какой переменной работать циклу
//     num++; // а тут, что с ним делать. В данном случае, цикл сработает 7 раз, от 50 будет прибавлять 1, до 56.
// }

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         // break; // останавливает цикл, когда срабатывает условие if (i === 6)
//         continue; // пропускает значение из условия, если нам его нужно пропустить if (i === 6)
//     }
//     console.log(i);
// }