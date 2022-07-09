/** @format */

const CrearSerie = require('./serieFibonacci');

let argv = process.argv;
let valor = argv[2].split('=')[1];

const cantidad = valor;

CrearSerie.CrearSerieFibonacci(cantidad).then((mensaje) => console.log(mensaje));
