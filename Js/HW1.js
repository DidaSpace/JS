/*
1.Необходимо пользователя попросить ввести температуру в градусах Цельсия,
преобразовать введенное пользователем значение в соответствующую температуру
в градусах по Фаренгейту и вывести в alert сообщение с таким текстом:
"Цельсий: {C}, Фаренгейт: {F}"
Где вместо {C} и {F} должны быть подставлены соответствующие значения, которые
были получены ранее.
Формула перевода градусов Цельсия в градусы Фаренгейта:
градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32

Уточнение: пользователь всегда вводит корректное число.
*/

let tempCelsius = +prompt("Введите значение температуры по Цельсию");
let celsiusToFahrenheit = Math.round((9 / 5) * tempCelsius) + 32;

alert(`Цельсий: {${tempCelsius}}, Фаренгейт: {${celsiusToFahrenheit}}`);

/*
2.Необходимо создать переменную name, записать в эту переменную свое имя.
Необходимо также создать переменную admin и присвоить этой переменной значение
из переменной name.
Вывести значение переменной admin в консоль.
*/

const myName = "Saida";
const admin = myName;
console.log(`admin ${admin}`);
