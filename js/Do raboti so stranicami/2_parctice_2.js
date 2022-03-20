"use strict";

const numberOfFilms = +prompt("Сколько фильмов?", '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


//
// ЦИКЛ DO...WHILE
//
// let i = 0;
// do {
//     const a = prompt("Что из последнего?", ""),
//           b = prompt("Оценка?", "");
//         i++;
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('Done!');
//         } else {
//             console.log("Error!");
//             i--;
//         }
// }
// while (i < 2);


//
// ЦИКЛ WHILE
//
// while (i < 2) {
//     const a = prompt("Что из последнего?", ""),
//           b = prompt("Оценка?", "");
//     i++;
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('Done!');
//     } else {
//         console.log("Error!");
//         i--;
//     }
// }


//
// ЦИКЛ FOR
//
for (let i = 0; i < 2; i++) {
    const a = prompt("Что из последнего?", ""),
          b = prompt("Оценка?", "");

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b; // а - значение объекта movies, b - его свойство. {a: "свойство", b: "свойство"}
        console.log("Done!");
    } else {
        console.log("Error!");
        i--;
    }
}


console.log(personalMovieDB);

if (personalMovieDB.count <= 10 ) {
    console.log("Вы просмотрели слишком мало фильмов, кеку", "");
} else if (personalMovieDB.count < 30 && personalMovieDB.count > 10) {
    console.log("Да вы любитель, кеку", "");
} else if (personalMovieDB.count >= 30) {   
    console.log("А вы, оказывается киноман, KEKL", "");
} else {
    console.log("Произошла ошибка", "");
}

// (personalMovieDB.count <= 10) ? console.log('Вы просмотрели слишком мало фильмов, кеку') : console.log(personalMovieDB.count);
// (personalMovieDB.count > 10 && personalMovieDB.count <= 30) ? console.log('Да вы любитель, кеку') : console.log(personalMovieDB.count);
// (personalMovieDB.count >= 30) ? console.log('А вы, оказывается киноман') : console.log(personalMovieDB.count);
