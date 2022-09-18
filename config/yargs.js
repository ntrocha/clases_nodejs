const argv = require('yargs')
                    .options({
                        'b':{
                            alias: 'base',
                            type: 'number',
                            demandOption: true,
                            describe: 'Asigna un valor a la base de multiplicacion',
                        },
                        'l':{
                            alias: 'listar',
                            type: 'boolean',
                            default: false,
                            describe: 'Muestra la tabla en consola',
                        },
                        'h':{
                            alias: 'hasta',
                            type: 'number',
                            default: 10,
                            describe: 'cantidad iterada de la multiplicacion',
                        }
                    })
                    .check((argv, options)=> {
                        if (isNaN(argv.base)){
                            throw `the base needs to be a number`
                        } 
                        return true
                    })
                    .argv;

module.exports = argv;
