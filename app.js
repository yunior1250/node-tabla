//import * as fs from 'fs/promises';
//const fs = require('fs');
const colors = require('colors');



const { argv } = require('process');
const { crearArchivo } = require('./helpers/multiplicar');

//la logica de yar se pasa ha otro archivo  config /yargs
const argvs = require('./config/yargs');

console.clear();



crearArchivo(argvs.b, argvs.l, argvs.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));




//console.log(process.argv);
//console.log(argvs);
//console.log('base: yargs', argv.b);
/*
const [, , arg3 = 'base=5'] = process.argv;
const [, base = 5] = arg3.split('=');
console.log(base);

//const base = 7;
*/


