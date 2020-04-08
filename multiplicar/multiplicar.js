//Se recomienda poner todos los required al inicio

const fs = require('fs');

//En donde yo use los colores necesito importar esto
const colors = require('colors');

/**
 Hay 3 tipos de required
 propio de node, linreria ya existe en node
 const fs = require('fs');

 express no existe nada en node, paquete que se instala
 alguien mas lo hizo por nosotros
 const fs = require('express');

los que nosotros mismos escribimos y damos una ruta
 const fs = require('./path');
 */

//tabla de multiplicar

/** 
 * yo quiero poder grabar en un archivo de texto mi tabla de multiplicar
entre a nodejs.org y entre por docs entre a la api de node con mi version
y busque FileSystem
 */


/**
 *fs:Hace referencia al paquete que acabamos de importar  el del require
 *El primer parametro es el nomre del archivo
 *El segundo es la data que va contener el archivo
 *El tercer parametro tenemos un callback:El que va controlar un error
 */


//Se debe transformar todo lo anterior en una funcion que retorne una promesa
//de esta forma podre cargar mi tabla de multiplicar desde app.js

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
        } else if (!Number(limite)) {
            reject(`El valor introducido ${limite} no es un numero`);
            return;
        }


        let data = '';

        for (let i = 0; i <= limite; i++) {

            data += `El resultado de ${base} * ${i} es: ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`tabla-${base}`)

        });
    });

}

/**
 * Crear una función que me muestre en consola la tabla de multiplicar
 * hasta el limite que yo le ponga
 */

let listarTabla = (base, limite = 10) => {

    console.log('================================='.green);
    console.log(`TABLA DE ${base}`);
    console.log('================================='.green);
    for (let i = 0; i <= limite; i++) {

        console.log(`El resultado de ${base} * ${i} es: ${base*i}`)
    }

}



//la que se usa para que la funcion o lo que yo defina adentro 
//sea de manera global 
module.exports = {

    crearArchivo,
    listarTabla
}