
console.clear();
const { error } = require('console');
const { creador } = require ('./helpers/multiplicar');
const argv = require('./config/yargs');

const state = argv.l;
const rango = argv.h;

console.log (argv);


creador(argv.base, state, rango)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'.green))
    .catch(error => console.log(error));





// console.log ('base: yargs', argv.base );
// console.log (process.argv);
// const [, , arg3= 'base=5'] = process.argv;
// const [, a = 5] = arg3.split('=');
// console.log(arg3);
// console.log(a);
