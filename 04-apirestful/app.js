/** @format */

const express = require('express');
const configFile = require('./config');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
	res.send('Hola');
});

app.get('/api/:year/:month', (req, res) => {
	//res.send(req.params); los datos viene en la ruta http://localhost:3000/api/2022/08
	//res.send(req.query); los datos viene en la ruta despues de ? http://localhost:3000/api/2022/08?hola=hola mundo

	res.send(req.params);
});

app.listen(configFile.PORT, configFile.HOST, () => {
	console.log(`listen sever ... ${configFile.PORT}`);
	console.log(`host ... ${configFile.HOST}`);
});
