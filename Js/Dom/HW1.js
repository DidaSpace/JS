"use strict";
``;
// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
const superLinkEl = document.getElementById("super_link");
console.log(superLinkEl);
// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
const cardLinkEls = document.querySelectorAll(".card-link");
cardLinkEls.forEach(function (cardLinkEl) {
  cardLinkEl.innerHTML = "ссылка";
});
// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
const cardLinkEl = document.querySelectorAll(".card-body .card-link");
console.log(cardLinkEl);

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
const fDataNum = document.querySelector("[data-number]");
console.log(fDataNum);
// 5. Выведите содержимое тега title в консоль.
const titleEl = document.getElementsByTagName("title")[0];
console.log(titleEl.innerHTML);
// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
const cardTitleEl = document.querySelector(".card-title");
console.log(cardTitleEl.parentElement);
// 7. Создайте тег p`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
const pEl = document.createElement("p");
pEl.innerHTML = "Привет";
const cardEl = document.querySelector(".card");
cardEl.appendChild(pEl);
console.log(cardEl);
// 8. Удалите тег h6 на странице.
const h6El = document.getElementsByTagName("h6")[0];
h6El.remove();
