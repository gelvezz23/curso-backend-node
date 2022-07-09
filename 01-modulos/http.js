/**
 * MODULO HTTP
 *
 * @format
 */

const http = require('http');
const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.write('Conexion');
		res.end();
	}
	if (req.url === '/api/products') {
		res.write(JSON.stringify(['mouse', 'teclado']));
		res.end();
	}
});

/*
server.on('connection', (port) => {
	console.log('Nueva conexion');
});
*/
server.listen(3000);
console.log('listener ... port : 3000');
