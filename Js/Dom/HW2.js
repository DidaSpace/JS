"use strict";

// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
const linkEls = document.querySelectorAll("a.dropdown-item");
linkEls.forEach((element) => {
  element.classList.add("super-dropdown");
});
console.log(linkEls);
// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.
const btnEl = document.querySelector("button.btn-secondary");
btnEl.classList.toggle("btn-secondary");
console.log(btnEl);
// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
const menuEl = document.querySelector(".menu");
menuEl.classList.remove("dropdown-menu");
console.log(menuEl);
// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`
const divEl = document.querySelector("div.dropdown");
console.log(divEl);
divEl.insertAdjacentHTML("afterend", '<a href="#">link</a>');
// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
const idEl = document.getElementById("dropdownMenuButton");
idEl.id = "superDropdown";
console.log(idEl);
// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
const atributEl = document.querySelector("[aria-labelledby]");
atributEl.dataset.dd = "3";
console.log(atributEl);
// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".
const dtEl = document.querySelector(".dropdown-toggle");
dtEl.removeAttribute("type");
console.log(dtEl);
