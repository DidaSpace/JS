/* 1
Создать переменные positive и negative, в которые пользователь вводит с 
клавиатуры значения. Нужно попросить пользователя ввести положительное число в 
переменную positive и отрицательное в переменную negative. 
Перед тем, как положить значения в данные переменные необходимо их превратить 
в числа.
После ввода значений, необходимо вывести "Все значения верные.", если 
пользователь действительно ввел корректные значения, которые мы просили его 
ввести.
Если же пользователь где-то ввел неверное значение, то необходимо вывести 
в консоль "Одно или более значений некорректно.".
*/

//const inputPositive = Number(prompt("Введите положительное число"));
// const inputNegative = Number(prompt("Введите oтрицательное число"));
// positive = Number(inputPositive);
// negative = Number(inputNegative);
// if ((positive > 0) && (negative < 0)) {
//   alert("Все значения верные");
// } else {
//   console.log("Одно или более значений некорректно");
// }
// const positive = Number(prompt("Введите положительное число"));
// const negative = Number(prompt("Введите oтрицательное число"));
// console.log(
//   positive > 0 && negative < 0
//     ? "Все значения верные"
//     : "Одно или более значений некорректно."
// );

/* 2
Необходимо переписать данный код, используя тернарный оператор.
Если есть какие-либо недочеты в коде, можете их исправить.
*/

// const money = confirm("У вас много денег?");
// if (money) {
//   console.log("Скоро будем у вас ;)");
// } else {
//   console.log("До свидания.");
// }

// console.log(money ? "Скоро будем у вас" : "До свидания");

/* 3
Необходимо создать переменную dayNumber, в которую пользователь должен ввести 
целое число в интервале [1, 32).
Если пользователь ввел иное значение, необходимо вывести в консоль 
"Неверное значение".
Если пользователь ввел верное значение, в нужном диапазоне, то необходимо 
определить, в какую декаду месяца попадает это число и вывести сообщение в 
консоль: "Число N1 попадает в N2 декаду месяца.", где вместо N1 и N2 будут 
подставлены подходящие значения, которые мы получили.

Примечание: выражение [1, 32) означает от 1 включительно, до 32, не включая 
число 32.
*/

// const dayNumber = Number(prompt("Введите день месяца"));
// if (dayNumber > 32 && dayNumber < 1) {
//   console.log("Неверное значение");
// } else if (dayNumber > 1dayNumber <= 10 && ) {
//   console.log(`Число ${dayNumber} попадает в 1 декаду месяца`);
// } else if (dayNumber <= 20) {
//   console.log(`Число ${dayNumber} попадает во 2 декаду месяца`);
// } else if (dayNumber < 32) {
//   console.log(`Число ${dayNumber} попадает в 3 декаду месяца`);
// }

/*  4
Необязательное задание.
Если вам показалось домашнее задание простым, выполняем данный пункт.

Необходимо от пользователя получить целое число.
Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.

Пример:
Пользователь ввел число 163. Программа должна вывести:
"В числе 163 количество сотен: 1, десятков: 6, единиц: 3"

Пример 2:
Пользователь ввел число 74. Программа должна вывести:
"В числе 74 количество сотен: 0, десятков: 7, единиц: 4"

Пример 3:
Пользователь ввел число 9537. Программа должна вывести:
"В числе 9537 количество сотен: 5, десятков: 3, единиц: 7"

Уточнение: Пользователь всегда вводит корректное положительное целое число.
Подсказка: Возможно, вам понадобится округление чисел и оператор %.
*/
// const number = Number(prompt("Введите целое положительное число"));
// const units = number % 10;
// const tens = Math.floor((number % 100) / 10);
// const hundreds = Math.floor((number % 1000) / 100);
// alert(
//   `В числе ${number} количество сотен: ${hundreds}, десятков: ${tens}, единиц:${units}`
// );

const dayNumber = Number(prompt("Введите день месяца"));
if (!Number.isInteger(dayNumber)) {
  console.log("Неверное значение");
} else if (dayNumber < 1 || dayNumber > 31) {
  console.log("Неверное значение");
} else if (dayNumber <= 10) {
  console.log(`Число ${dayNumber} попадает в 1 декаду месяца`);
} else if (dayNumber <= 20) {
  console.log(`Число ${dayNumber} попадает во 2 декаду месяца`);
} else if (dayNumber < 32) {
  console.log(`Число ${dayNumber} попадает в 3 декаду месяца`);
}
