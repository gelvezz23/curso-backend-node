/** @format */

const express = require("express");
const configFile = require("./config");
const Joi = require("joi");
require("dotenv").config();

const app = express();
app.use(express.json());

const usersData = [
  {
    id: 1,
    name: "carlos",
  },
  {
    id: 2,
    name: "aaaa",
  },
  { id: 3, name: "ffff" },
];

app.get("/", (req, res) => {
  res.send("Hola");
});

app.get("/api/date/:year/:month", (req, res) => {
  //res.send(req.params); los datos viene en la ruta http://localhost:3000/api/2022/08
  //res.send(req.query); los datos viene en la ruta despues de ? http://localhost:3000/api/2022/08?hola=hola mundo

  res.send(req.params);
});

app.get("/api/users", (req, res) => {
  res.send(usersData);
});
app.get("/api/users/:id", (req, res) => {
  let users = existeUsuario(req.params.id);
  if (!users) {
    res.status(404).send("El usuario no se encontro");
  } else {
    res.send(users);
  }
});

app.post("/api/users", (req, res) => {
  const { error, value } = validateUser(req.body.name);

  if (!error) {
    const user = {
      id: usersData.length + 1,
      name: req.body.name,
    };
    usersData.push(user);
    res.status(200).send(user);
  } else {
    res.status(400).send(error.details[0].message);
  }
});

app.put("/api/users/:id", (req, res) => {
  let users = existeUsuario(req.params.id);
  if (!users) {
    res.status(404).send("El usuario no se encontro");
  }
  const { error, value } = validateUser(req.body.name);

  if (error) {
    const { message } = error.details[0];
    res.status(400).send(message);
    return;
  }
  users.name = value.name;
  res.send(users);
});

app.get("/api/alphabet/:letter", (req, res) => {
  const letter = req.params.letter;
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let success = 1;
  for (let i = 0; i <= alphabet.length; i++) {
    if (letter.includes(alphabet[i])) {
      success++;
    }
  }
  console.log(success);
  console.log(alphabet.length);
  console.log(success === alphabet.length);
  res.send(letter);
});

app.delete("/api/users/:id", (req, res) => {
  let users = existeUsuario(req.params.id);
  if (!users) {
    res.status(404).send("El usuario no se encontro");
  }

  const index = usersData.indexOf(users);
  usersData.splice(index, 1);
  res.send(usersData);
});

app.listen(configFile.PORT, configFile.HOST, () => {
  console.log(`listen sever ... ${configFile.PORT}`);
  console.log(`host ... ${configFile.HOST}`);
});

const existeUsuario = (id) => {
  return usersData.find((user) => user.id === parseInt(id));
};

const validateUser = (name) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });

  return schema.validate({ name: name });
};

/**
 * have you ever bought a console video games ?
 * have you ever traveled outside the country ?
 * have you ever played board games ?
 */
