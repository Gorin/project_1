'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов?", '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов?", '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function remebmerMyFilms() {
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
}

remebmerMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count <= 10 ) {
        console.log("Вы просмотрели слишком мало фильмов, кеку", "");
    } else if (personalMovieDB.count < 30 && personalMovieDB.count > 10) {
        console.log("Да вы любитель, кеку", "");
    } else if (personalMovieDB.count >= 30) {   
        console.log("А вы, оказывается киноман, KEKL", "");
    } else {
        console.log("Произошла ошибка", "");
    }
}

//
// Задаем вопрос пользователю и добавляем в массив personalMovieDB.genres его любимые жанры, 
// которые он указал в вопросе под номером 1,2,3 
//

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const a = prompt(`Какой ваш любимый жанр под номером ${i}?`);
    
        if (a != null && a != '') {
            personalMovieDB.genres[i - 1] = a; 
        }
    }

}

writeYourGenres();

//
// Если свойство массива personalMovieDB.privat = false, то выводим базу данных в консоль
//

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    } else {
        console.log('Error');
    }
}

detectPersonalLevel();
showMyDB();