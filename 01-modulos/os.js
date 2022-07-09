/**
 * MODULO OS
 * PARA EL SISTEMA OPERATIVO
 *
 * @format
 */

const os = require('os');

const memoriaLibre = os.freemem();
const memoriaTotal = os.totalmem();

console.log(`Memoria libre : ${memoriaLibre}`);
console.log(`Memoria Total : ${memoriaTotal}`);
