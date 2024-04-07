"use strict";

/* 1
Создайте функцию которая принимает число, возводит переданное число в куб и 
возвращает полученное значение. 
Необходимо продемонстрировать вызов данной функции, с выводом результата, 
который получаем от функции, в консоль.
*/
function cube(number) {
  return number ** 3;
}
console.log(cube(5));

/* 2
Необходимо попросить пользователя ввести число.
Если пользователь ввел отличное от числа значение, необходимо вывести в консоль
строку: "Значение задано неверно", иначе необходимо будет вызвать функцию 
(нужно будет ее создать), которая будет принимать введенное пользователем 
число. Функция должна вычесть из переданного ей числа 13% и вывести в консоль 
сообщение "Размер заработной платы за вычетом налогов равен N."
*/

const number = prompt("Введите число");
if (isNaN(number)) {
  console.log("Значение задано неверно");
} else {
  console.log(
    `Размер заработной платы за вычетом налогов равен ${salary(number)}`
  );
}

function salary(number) {
  return (number = number * 0.87);
}

/* 3 
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

const a = Number(prompt("Ведите 1е число"));
const b = Number(prompt("Ведите 2е число"));
const c = Number(prompt("Ведите 3е число"));

const numberMax = (a, b, c) => Math.max(a, b, c);
console.log(
  `Максимальное значение среди чисел ${a}, ${b}, ${c} равно ${numberMax(
    a,
    b,
    c
  )}`
);

/* 4
Необходимо реализовать четыре функции, каждая функция должна принимать по два
числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение
console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите
внимание на разность, функция должна вычесть из большего числа меньшее, либо
вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
не нужно.
Демонстрировать работы функций не обязательно.
*/
const add = (x, y) => x + y;
console.log(add(3, 6));

const diff = (x, y) => Math.max(x, y) - Math.min(x, y);
console.log(diff(3, 6));

const multip = (x, y) => x * y;
console.log(multip(3, 6));

const div = (x, y) => x / y;
console.log(div(3, 6));

// Реализовать функцию round5, которой передается целое число, функция должна
//   возвращать ближайшее целое число к тому что было передано, без остатка делящееся
//   на 5.
function round5(val) {
  return Math.isIntecer(val) / 5;
}

console.log(round5(0)); // 0
console.log(round5(2)); // 0
console.log(round5(3)); // 5
console.log(round5(11)); // 10
console.log(round5(14)); // 15
console.log(round5(50)); // 50
console.log(round5(-2)); // 0
console.log(round5(-3)); // -5