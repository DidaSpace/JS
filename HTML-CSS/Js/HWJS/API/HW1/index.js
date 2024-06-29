// Необходимо создать веб-страницу с динамическими элементами с расписанием занятий.

// На странице должна быть таблица с расписанием занятий, на основе JSON-данных.
// Каждая строка таблицы должна содержать информацию о занятии, а именно:
// - название занятия
// - время проведения занятия
// - максимальное количество участников
// - текущее количество участников
// - кнопка "записаться"
// - кнопка "отменить запись"

// Если максимальное количество участников достигнуто, либо пользователь уже записан на занятие, сделайте кнопку "записаться" неактивной.
// Кнопка "отменить запись" активна в случае, если пользователь записан на занятие, иначе она должна быть неактивна.

// Пользователь может записаться на один курс только один раз.

// При нажатии на кнопку "записаться" увеличьте количество записанных участников.
// Если пользователь нажимает "отменить запись", уменьшите количество записанных участников.
// Обновляйте состояние кнопок и количество участников в реальном времени.

// Если количество участников уже максимально, то пользователь не может записаться, даже если он не записывался ранее.

// Сохраняйте данные в LocalStorage, чтобы они сохранялись и отображались при перезагрузке страницы.
const tableJSON = `[
    {
        "id": 1,
        "name": "Йога",
        "time": "10:00 - 11:00",
        "maxParticipants": 15,
        "currentParticipants": 8
    },
    {
        "id": 2,
        "name": "Пилатес",
        "time": "11:30 - 12:30",
        "maxParticipants": 10,
        "currentParticipants": 5
    },
    {
        "id": 3,
        "name": "Кроссфит",
        "time": "13:00 - 14:00",
        "maxParticipants": 20,
        "currentParticipants": 15
    },
    {
        "id": 4,
        "name": "Танцы",
        "time": "14:30 - 15:30",
        "maxParticipants": 12,
        "currentParticipants": 10
    },
    {
        "id": 5,
        "name": "Бокс",
        "time": "16:00 - 17:00",
        "maxParticipants": 8,
        "currentParticipants": 6
    }
]`;

const containeEl = document.querySelector(".container");
const key = "table";
if (!localStorage.getItem(key)) {
  localStorage.setItem(key, tableJSON);
}

const table = JSON.parse(localStorage.getItem(key));

function createTableHTML(element) {
  return `
      <div class="table-item"  data-id="${element.id}">
        <h2>${element.name}</h2>
        <p>Время: ${element.time}</p>
        <p >Максимальное количество участников: ${element.maxParticipants}</p>
        <p class = "current-participants">Текущее количество участников: ${element.currentParticipants}</p>
        <button class= "regist">записаться</button>
        <button class= "cancel">отменить запись</button>
      </div>
    `;
}

containeEl.innerHTML = table
  .map((element) => createTableHTML(element))
  .join("");
console.log(containeEl);

const registEls = containeEl.querySelectorAll(".regist");
const cancelEls = containeEl.querySelectorAll(".cancel");
console.log(registEls, cancelEls);

cancelEls.forEach((element) => {
  element.disabled = true;
});

registEls.forEach((button) => {
  const parentDiv = button.closest(".table-item");
  console.log(parentDiv);
  const id = parseInt(parentDiv.getAttribute("data-id"), 10);
  const element = table.find((el) => el.id === id);
  if (element.currentParticipants >= element.maxParticipants) {
    button.disabled = true;
  }

  button.addEventListener("click", function () {
    if (element.currentParticipants < element.maxParticipants) {
      element.currentParticipants += 1;
      parentDiv.querySelector(
        ".current-participants"
      ).textContent = `Текущее количество участников : ${element.currentParticipants}`;
      localStorage.setItem(key, JSON.stringify(table));
      const cancelButton = parentDiv.querySelector(".cancel");
      cancelButton.disabled = false;
      button.disabled = true;
    } else {
      alert("Maksimalnoe kolicestvo dostignuto");
      button.disabled = true;
    }
  });
});

cancelEls.forEach(function (buton) {
  buton.addEventListener("click", function (e) {
    const parentDiv = buton.closest(".table-item");
    const id = parseInt(parentDiv.getAttribute("data-id"), 10);
    const element = table.find((el) => el.id === id);
    element.currentParticipants -= 1;
    parentDiv.querySelector(
      ".current-participants"
    ).textContent = `Текущее количество участников : ${element.currentParticipants}`;
    localStorage.setItem(key, JSON.stringify(table));
    buton.disabled = true;
    parentDiv.querySelector(".regist").disabled = false;
  });
});
