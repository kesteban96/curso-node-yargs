//Optimización de los yargs

const opt = {
    base: {
        //obligatorio
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}




const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opt)
    .command('crear', 'Imprime en consola la tabla de multiplicar', opt)
    .help()
    .argv;

module.exports = {
    argv
}