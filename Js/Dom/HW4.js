"use strict";

// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.
const fromEl = document.querySelector("input#from");
const spanEl = document.querySelector("span");
fromEl.addEventListener("input", function (e) {
  spanEl.innerHTML = fromEl.value;
});

// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.
const messageBtnEl = document.querySelector("button.messageBtn");
messageBtnEl.addEventListener("click", function (e) {
  const messageEl = document.querySelector(".message");
  messageEl.classList.add("animate_animated", "animate_fadeInLeftBig");
  messageEl.style.visibility = "visible";
});

// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

const submitEl = document.querySelector("button.submit");
const formEl = document.querySelector("form");
const inputEl = formEl.querySelector("input.form-control");
const selectEl = formEl.querySelector("select.form-control");

submitEl.addEventListener("click", function (e) {
  console.log(selectEl.value);
  e.preventDefault();
  if (selectEl.value === "") {
    selectEl.classList.add("error");
  } else {
    selectEl.classList.remove("error");
  }
  if (inputEl.value === "") {
    inputEl.classList.add("error");
  } else {
    inputEl.classList.remove("error");
  }

  inputEl.addEventListener("input", function () {
    if (inputEl.value !== "") {
      inputEl.classList.remove("error");
    }
  });

  selectEl.addEventListener("input", function () {
    if (selectEl.value !== "") {
      selectEl.classList.remove("error");
    }
  });
});
