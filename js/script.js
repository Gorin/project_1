"use strict";

const numberOfFilms = +prompt("Сколько фильмов?", '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Что из последнего?", ""),
      b = prompt("Оценка?", ""),
      c = prompt("Что из последнего?", ""),
      d = prompt("Оценка?", "");
      
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);