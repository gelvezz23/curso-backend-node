/** @format */

const express = require('express');
const configFile = require('./config');
const Joi = require('joi');
require('dotenv').config();

const app = express();
app.use(express.json());

const usersData = [
	{
		id: 1,
		name: 'carlos',
	},
	{
		id: 2,
		name: 'aaaa',
	},
	{ id: 3, name: 'ffff' },
];

app.get('/', (req, res) => {
	res.send('Hola');
});

app.get('/api/date/:year/:month', (req, res) => {
	//res.send(req.params); los datos viene en la ruta http://localhost:3000/api/2022/08
	//res.send(req.query); los datos viene en la ruta despues de ? http://localhost:3000/api/2022/08?hola=hola mundo

	res.send(req.params);
});

app.get('/api/users', (req, res) => {
	res.send(usersData);
});
app.get('/api/users/:id', (req, res) => {
	let users = existeUsuario(req.params.id);

	if (!users) {
		res.status(404).send('El usuario no se encontro');
	} else {
		res.send(users);
	}
});

app.post('/api/users', (req, res) => {
	const schema = Joi.object({
		name: Joi.string().min(3).required(),
	});
	const result = schema.validate({ name: req.body.name });

	if (!result.error) {
		const user = {
			id: usersData.length + 1,
			name: req.body.name,
		};
		usersData.push(user);
		res.status(200).send(user);
	} else {
		res.status(400).send(result);
	}
});

app.put('/api/users/:id', (req, res) => {
	let users = existeUsuario(req.params.id);
	if (!users) {
		res.status(404).send('El usuario no se encontro');
	}

	const schema = Joi.object({
		name: Joi.string().min(3).required(),
	});
	const result = schema.validate({ name: req.body.name });

	if (result.error) {
		res.status(400).send(result);
		return;
	}
	users.name = result.value.name;
	res.send(users);
});

app.listen(configFile.PORT, configFile.HOST, () => {
	console.log(`listen sever ... ${configFile.PORT}`);
	console.log(`host ... ${configFile.HOST}`);
});

const existeUsuario = (id) => {
	return usersData.find((user) => user.id === parseInt(id));
};
