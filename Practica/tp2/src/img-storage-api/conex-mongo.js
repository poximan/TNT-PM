"use strict";

const net = require('net');

/**
 * Esta función devuelve una promesa que se completa
 * cuando se puede establecer la conexión a un puerto
 * y se cancela si la conexión no es exitosa.
 *
 * @param {int} puerto
 * @returns Promise
 */
async function esperarPuerto (puerto) {
    return new Promise((resolve, reject) => {
        var client = net.createConnection({ port: puerto }, () => {
            // Se relalizó la conexión
            client.destroy();
            resolve();
        });
        client.on('error', () => reject());
    });
}

/**
 * Genera una promesa con un tiempo.
 *
 * @param {int} tiempo
 */
async function espera(tiempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), tiempo);
    })
}

async function main() {
    const puerto = 27017;
    const intervalo = 500; // millisegundo

    while (true) {
        try {
            await esperarPuerto(puerto);
            console.log("Go! Go! Go!");
            break;
        } catch (e) {
            await espera(intervalo);
        }
    }
    console.log("Aca empieza todo!");
}
main();
