/**
 * MODULO FILE SYSTEM
 * MANEJAR ARCHIVOS
 *
 * @format
 */

const fs = require('fs');

//const archivo = fs.readdirSync('./');
//console.log(archivo);

// de forma asincorna

fs.readdir('./', (err, files) => {
	if (err) {
		console.log('Error', err);
	} else {
		console.log(files);
	}
});
