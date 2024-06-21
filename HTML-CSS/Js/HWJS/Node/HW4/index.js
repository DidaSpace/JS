const express = require("express");
const path = require("path");
const fs = require("fs");
const joi = require("joi");
const { checkParams, checkBody } = require("./validator/validator");
const { idScheme, usersScheme } = require("./validator/scheme");

const app = express();
const pathFile = path.join(__dirname, "users.json");
let uniqueID = 1;

app.use(express.json());

app.get("/users", (req, res) => {
  const users = JSON.parse(fs.readFileSync(pathFile));
  res.send({ users });
});

app.get("/users/:id", checkParams(idScheme), (req, res) => {
  const users = JSON.parse(fs.readFileSync(pathFile));
  const user = users.find((user) => user.id === Number(req.params.id));
  if (user) {
    res.send({ user });
  } else {
    res.status(404).send({ user: null });
  }
});

app.post("/users/", checkBody(usersScheme), (req, res) => {
  const users = JSON.parse(fs.readFileSync(pathFile));
  uniqueID += 1;

  const user = {
    id: uniqueID,
    name: req.body.name,
    surname: req.body.surname,
    city: req.body.city,
    age: req.body.age,
  };

  users.push(user);

  fs.writeFileSync(pathFile, JSON.stringify(users, null, 2));
  res.send({ user });
});

app.put(
  "/users/:id",
  checkParams(idScheme),
  checkBody(usersScheme),
  (req, res) => {
    const users = JSON.parse(fs.readFileSync(pathFile));
    const user = users.find((user) => user.id === Number(req.params.id));
    if (user) {
      user.name = req.body.name;
      user.surname = req.body.surname;
      user.city = req.body.city;
      user.age = req.body.age;
      fs.writeFileSync(pathFile, JSON.stringify(users, null, 2));
      res.send({ user });
    } else {
      res.status(404).send({ user: null });
    }
  }
);

app.delete("/users/:id", checkParams(idScheme), (req, res) => {
  const users = JSON.parse(fs.readFileSync(pathFile));
  const userIndex = users.findIndex(
    (user) => user.id === Number(req.params.id)
  );
  if (userIndex > -1) {
    users.splice(userIndex, 1);
    fs.writeFileSync(pathFile, JSON.stringify(users, null, 2));
    res.send({ status: "Ok" });
  } else {
    res.status(404).send({ user: null });
  }
});

app.listen(3000);
