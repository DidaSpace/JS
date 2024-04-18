// Задание 1
// 1. Поиск в интернете (бесплатные api примеры).
// 2. Найти любые данные, на произвольную тему.
// 3. Создать файл data.js.
// 4. Создать переменную которая будет хранить данные из публичных api.

// Задание 2
// 1. Создать файл index.html.
// 2. Подключить data.js.
// 3. Сформировать контент из данных (картинка загловок и параграф).
// 4. Добавить данный контент в вёрстку.
// 5. * Добавить стили при необходимости (по желанию).
const divConEl = document.querySelector("div.container");
const data = JSON.parse(DATAJS);
data.forEach((element) => {
  const divFruitsEl = document.createElement("div");
  divFruitsEl.classList.add("fruits");
  const imgEl = document.createElement("img");
  imgEl.src = element.imgUrl;
  imgEl.width = element.width;
  imgEl.height = element.height;
  imgEl.classList.add("fruits__img");
  const h2El = document.createElement("h2");
  h2El.innerHTML = element.name;
  h2El.classList.add("fruits__name");
  const ulEl = document.createElement("ul");
  const li1El = document.createElement("li");
  li1El.innerHTML = element.color;
  const li2El = document.createElement("li");
  li2El.innerHTML = element.taste;
  ulEl.appendChild(li1El);
  ulEl.appendChild(li2El);

  divFruitsEl.appendChild(h2El);
  divFruitsEl.appendChild(imgEl);
  divFruitsEl.appendChild(ulEl);
  divConEl.appendChild(divFruitsEl);
});
