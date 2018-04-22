# tp2 de Taller de Nuevas Tecnologias - UNPSJB
Construcción y gestión de contenedores de Software

## Enunciado
1. Descargue la imagen de nginx y mqtt . Cree un proyecto con la herramienta
docker-compose dónde utilice a:
* nginx como proxy inverso dónde el tráfico se dirija a la aplicación express del práctico anterior.
* node agregue node-red al package.json
* mqtt configurado con transporte websockets.

Cree el CMD adecuado para que el servicio node exponga la UI de Node-RED.
![alt text](https://github.com/poximan/TNT-PM/tree/master/Practica/tp2/imagenes/node-red.png "Node Red")<br/>

Se espera que los tanto Node-RED y mqtt puedan operar sobre el mismo punto de entrada http, sin utilizar puertos diferentes.

2. Defina una serie de endpoints REST para dar soporte a https://github.com/node-red/node-red/tree/master/red/runtime/storage. Defina qué mecanismo de
Express la permitirán autenticar los requerimientos HTTP.

3. Agregue registro de cambios a los flows definidos en el punto 2. Implemente la especificación. Cada cambios en los flujos deberá estar asociado con un autor, una fecha y un estado previo.

4. Modifique la configuración de Node-RED dentro del contenedor para que
utilice los cambios implementados en el punto 3. Para esto deberá escribir una backend y modificar la configuración de su proyecto para que lo utilice.

5. Analice las posibilidades de integración de Express con Node-RED. En el caso de elegir una version determinada de flows definidos en el punto 3, ¿Qué consideraciones debería tener? ¿Sería posible recargar el proyecto con una configuración dada? ¿Se trata Node-RED de una aplicación con o sin estado?

## Requisitos del sistema
* Debe estar instalado Docker, gestor de contenedores virtuales (https://www.docker.com/). Este proyecto fue desarrollado con v17.12.0.

## Ejecutar el sistema
Clonar el proyecto https://github.com/poximan/TNT-PM.git

Desde la carpeta /TNT-PM/Practica/tp2/src ejecutar

### Para levantar todos los servicios
```
docker-compose up --build
```
Esto levantara todos los servicios segun lo especificado en el archivo docker-compose.yml

### Para levantar un servicio
```
docker-compose run {nombre servicio}
```
Esto levantara el servicio que coincida con el nombre dado. Este nombre debe existir en docker-compose.yml
