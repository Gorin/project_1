'use strict';

        // 1) Задача

// let x = 5;
// alert(x++); // <<< Выведет 5, потому что в Алерт сначала выводится значение переменной, а потом уже ++
// ^^^ <<< Чтобы вывести 6, нужно указать так: alert(++x);

        // 2) Задача

// console.log(typeof([] + false)); // <<< false, потому что пустой массив приводится в строку
// console.log([] + false - null); // <<< NaN, потому что string - не число
// console.log([] + false - null + true); // <<< NaN, потому что string - не число

        // 3) Задача

// let y = 1;
// let x = y = 2;
// alert(x); << Вывод: 2.

        // 4) Задача

// console.log([] + 1 + 2); // Вывод: 12, потому что массив преобразуется в string, 
// за ним цифры тоже переводятся в string

        // 5) Задача

// alert("1" [0]); Вывод: 1

        // 6) Задача

// console.log(2 && 1 && null && 0 && undefined);
// Оператор && запинается на лжи, null = false, поэтому вывод будет null
// Оператор || запинается на правде.

        // 7) Задача

// console.log(!!( 1 && 2) === (1 && 2)); // !! - превращает значение в Boolean (true/false), поэтому вывод false

        // 8) Задача

// alert(null || 2 && 3 || 4); // Вывод: 3, потому что || запинается на правде. 
// Первое будет действие && = 3. (по таблице приоритетов)
// Второе будет null || 3 = 3.
// Третье будет 3 || 4 = 3. 

        // 9) Задача

// const a = [1, 2, 3];
// const b = [1, 2, 3];

// a == b ?? - Нет. Потому что это боксы с информацией, они не одинаковы.

        // 10) Задача

// alert( +"infinty"); // Вывод infinity и это будет число.

        // 11) Задача

// console.log("Ёжик" > "яблоко"); // Вывод будет False, нужно смотреть на каких позициях символы в Unicode.

        // 12) Задача

// console.log(0 || "" || 2 || undefined || true || false); // || - запинается на правде.
// Из-за того, что true в этом выражении будет только 2, вернется в вывод 2.