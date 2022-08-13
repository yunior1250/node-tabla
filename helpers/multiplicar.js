//const { rejects } = require('assert');
const fs = require('fs');
const colors = require('colors');
//const { resolve } = require('path');

/*
const crearArchivo = (base = 5) => {

    return new Promise((resolve, rejects) => {

        console.log('============================');
        console.log('tabla de:', base);
        console.log('============================');
        let salida = '';

        for (let i = 1; i <= 10; i++) {
            salida += ` ${base} x ${i} = ${base * i}\n`;
        }
        console.log(salida);
        /*
        fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
            if (err) throw err;
            console.log(`tabla-${base}.txt Creado`);
        });
        //lo mismo Sync

        fs.writeFileSync(`tabla-${base}.txt`, salida);
        //y atrapar los errores con un try catch
        resolve(`tabla-${base}.txt Creado`);

    })

}*/
///async
const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    //return new Promise((resolve, rejects) => {
    try {
        if (listar) {
            console.log('============================'.green);
            console.log('tabla de:'.green, colors.blue(base));
            console.log('============================'.green);
        }
        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += ` ${base} x ${i} ${'='} ${base * i}\n`;
            consola += ` ${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
        }
        if (listar) {
            //para que muestre en consola  i liste 
            console.log(consola);
        }
        /*
        fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
            if (err) throw err;
            console.log(`tabla-${base}.txt Creado`);
        });*/
        //lo mismo Sync
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        //y atrapar los errores con un try catch
        return `tabla-${base}.txt creadisimos`;
    } catch (error) {
        throw error;
    }
    // })

}
module.exports = {
    crearArchivo
}

