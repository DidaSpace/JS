const express = require("express");
const fs = require("fs");
const app = express();

const countersFilePath = "./counters.json";

function loadCountersFromFile() {
  try {
    const data = fs.readFileSync(countersFilePath);
    return JSON.parse(data);
  } catch (err) {
    console.error("Ошибка при чтении файла:", err);
    return {};
  }
}

function saveCountersToFile(counters) {
  fs.writeFile(countersFilePath, JSON.stringify(counters, null, 2), (err) => {
    if (err) {
      console.error("Ошибка при сохранении файла:", err);
    } else {
      console.log("CСчетчики сохранены в файл:", counters);
    }
  });
}

let counters = loadCountersFromFile();

app.get("/", (req, res) => {
  counters["/"] = (counters["/"] || 0) + 1;
  saveCountersToFile(counters);
  res.send(`
    <h1>Добро пожаловать на главную страницу!</h1>
    <p>Просмотры: ${counters["/"]}</p>
    <a href="/about">Обо мне</a>
  `);
});

app.get("/about", (req, res) => {
  counters["/about"] = (counters["/about"] || 0) + 1;
  saveCountersToFile(counters);
  res.send(`
    <h1>Страница обо мне</h1>
    <p>Просмотры: ${counters["/about"]}</p>
    <a href="/">Главная страница</a>
  `);
});

app.listen(3000);
