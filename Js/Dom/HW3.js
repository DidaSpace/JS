"use strict";

// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.
document.addEventListener("DOMContentLoaded", function (e) {
  console.log("все теги прогрузились");
});
// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.
window.addEventListener("load", function (e) {
  console.log("страница загрузилась");
});

// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.

const bodyEl = document.querySelector("body");
bodyEl.addEventListener("click", function (e) {
  console.log(e.target);
  if (e.target.classList.contains("super_element")) {
    console.log(
      `Класс "super_element" присутствует в элементе "${e.target.tagName.toLowerCase()}"`
    );
  } else {
    console.log(
      `Класс "super_element" отсутствует в элементе "${e.target.tagName.toLowerCase()}"`
    );
  }
});

// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."
const textAreaEl = document.querySelector("textarea");
textAreaEl.addEventListener("mouseover", function (e) {
  console.log("Вы навели на textarea");
});
textAreaEl.addEventListener("mouseleave", function (e) {
  console.log("Курсор мыши покинул textarea");
});
// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.
const ulEl = document.querySelector("ul");
ulEl.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    console.log(e.target.innerHTML);
  }
});
// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.
// Ответ: Причина, по которой сначала выводится текст из 5-го задания, а затем из 3-го задания, заключается в порядке обработки событий и фазе всплытия событий (event bubbling).
// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.
const liArrayEl = document.querySelectorAll("li");
ulEl.addEventListener("click", function (e) {
  for (let i = 0; i < liArrayEl.length; i++) {
    if (i % 2 === 1) {
      liArrayEl[i].style.backgroundColor = "red";
    }
  }
});

// for (let i = 0; i < liArrayEl.length; i++) {
//   if (i % 2 === 1) {
//     liArrayEl[i].style.backgroundColor = "red";
//   }
// }
