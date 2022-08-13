


const argvs = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        // demandOption: true,
        default: false,
        describe: 'Muestra la tabla en consola'

    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        //demandOption: true,
        default: 10,
        describe: 'Esta es el tamanion que s emultiplica la base '
    })
    .check((argv, options) => {
        // console.log('yargs', argv)
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un numero ';
        }
        return true;
    })
    .argv;

module.exports = argvs;