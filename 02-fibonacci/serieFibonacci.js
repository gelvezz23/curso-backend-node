/**
 * SERIE FIBONACCI
 *
 * @format
 */

const fs = require('fs');

const CrearSerieFibonacci = (cantidad) => {
	return new Promise((resolve, reject) => {
		let fibo1 = 1;
		let fibo2 = 1;
		let data = '';

		data += `${fibo1} `;
		for (let i = 2; i <= cantidad; i++) {
			data += `${fibo2} `;
			fibo2 = fibo1 + fibo2;
			fibo1 = fibo2 - fibo1;
		}

		fs.writeFile('./fibonacci.txt', data, (err) => {
			if (err) {
				reject('Error no se creo el archivo');
			} else {
				resolve('archivo creado');
			}
		});
	});
};

module.exports = {
	CrearSerieFibonacci,
};
