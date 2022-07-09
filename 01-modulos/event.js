/**
 * MODULO EVENT
 *
 * @format
 */

const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('mensajeLoger', (arg) => {
	console.log('Listener llamado', arg);
});

emitter.emit('mensajeLoger', { id: 1, url: 'http://prueba.com' });
