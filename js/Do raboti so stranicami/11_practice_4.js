// 'use strict';

// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function () {
//         personalMovieDB.count = +prompt("Сколько фильмов?", '');

//         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = +prompt("Сколько фильмов?", '');
//         }
//     },
//     rememberMyFilms: function () {
//         for (let i = 0; i < 2; i++) {
//             const a = prompt("Что из последнего?", ""),
//                 b = prompt("Оценка?", "");

//             if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//                 personalMovieDB.movies[a] = b;
//                 // а - значение объекта movies, b - его свойство. {a: "свойство", b: "свойство"}
//                 console.log("Done!");
//             } else {
//                 console.log("Error!");
//                 i--;
//             }
//         }
//     },
//     detectedPersonalLevel: function () {
//         if (personalMovieDB.count <= 10) {
//             console.log("Вы просмотрели слишком мало фильмов, кеку", "");
//         } else if (personalMovieDB.count < 30 && personalMovieDB.count > 10) {
//             console.log("Да вы любитель, кеку", "");
//         } else if (personalMovieDB.count >= 30) {
//             console.log("А вы, оказывается киноман, KEKL", "");
//         } else {
//             console.log("Произошла ошибка", "");
//         }
//     },
//     writeYourGenres: function () {
//         for (let i = 1; i <= 3; i++) {
//             let genre = prompt(`Какой ваш любимый жанр под номером ${i}?`);

//             if (genre === '' || genre === null) {
//                 console.log('ПУСТО!');
//                 i--;
//             } else {
//                 personalMovieDB.genres[i - 1] = genre;
//             }
//         }
//         personalMovieDB.genres.forEach((item, i) => {
//             console.log(`Любимый жанр ${i + 1} - это ${item}`);
//         });
//     },
//     showMyDB: function (hidden) {
//         if (!hidden) {
//             console.log(personalMovieDB);
//         } else {
//             console.log('Error');
//         }
//     },
//     toggleVisibleMyDB: function () {
//         if (personalMovieDB.privat) {
//             personalMovieDB.privat = false;
//         } else {
//             personalMovieDB.privat = true;
//         }
//     }
// };

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectedPersonalLevel();
// personalMovieDB.writeYourGenres();
// personalMovieDB.showMyDB();