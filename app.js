//cuando no lleva./ es porque es un paquete
const argv = require('./config/yargs').argv;



console.log(argv.base);
console.log(argv.limite);


//A continuación usare la destructuración{}
//se realizan las exportaciones
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let command = argv._[0];

switch (command) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => {
                console.log(`archivo creado`, `${archivo}`.green);
            })
            .catch(err => {
                console.log(err);
            });
        break;
    default:
        console.log('Comando no reconocido');
}

//let base = 'abc';

//console.log(process.argv);
/**
 * Con el process puedo obtener los parametros desde consola
 * y obtenerlos en mi programa
 */

//let argv2 = process.argv;
//console.log(argv.base);
//console.log('limite', argv.limite);
//console.log(argv2);

//Forma 1 de tomar por parametro el valor que yo deseo
//let argv = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1]

/**
 * Como usar una función que se encuentra en otra clase
 * en otro archivo
 */

//crearArchivo(base)
//  .then(archivo => {
//    console.log(`archivo creado ${archivo}`);
//})
//.catch(err => {
//   console.log(err);
//});


//paso a paso del git
/**
 * 1. git init
 * 2. git status
 * 3. agregar al gitignore lo que no quiero subir a git
 * 4. git add .
 * 5. git commit -m
 */