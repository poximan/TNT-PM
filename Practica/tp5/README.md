# tp5 de Taller de Nuevas Tecnologias - UNPSJB
NodeRED Dashboard

## Enunciado
1. Agregue una vista Express al práctico anterior para realizar CRUD de usuarios del sistema. Adecúe el backend de autenticación de ser necesario.

2. Substituya el proxy reverso basado en Nginx por un proxy reverso que soporte configuración dinámica como https://github.com/OptimalBits/ redbird. Deberá ser capaz de agregar instancias de “proyectos” desde un CRUD similar al del punto 1. Pude agregar servicios publicador subscriptor de configuración. ¿Soporta el lanzamiento de contenedores bajo demanda el proxy que utilizó?

3. Agregue vista CRUD para las versiones de flows realizadas en la práctica 1. Analice si el enfoque de proyectos es más sencillo que el versionado de flows, si así lo considere, describa como lo integraría con las primitivas de
Docker. https://nodered.org/docs/user-guide/projects/

4. Mueva el de la vista Express del práctico anterior a un widget de NodeRed Dashboard mediante un nodo del tipo template. ¿Qué consideraciones se tomaron para servir los recursos estáticos?

5. ¿Qué trabajos de los realizados en las práctica identifica que serán resueltos en el roadmap propuesto en https://nodered.org/blog/2017/07/17/ roadmap-to-1-dot-0?

## Requisitos del sistema
* Debe estar instalado Docker, gestor de contenedores virtuales (https://www.docker.com/). Este proyecto fue desarrollado con v17.12.0.

## Ejecutar el sistema
Clonar el proyecto https://github.com/poximan/TNT-PM.git

Desde la carpeta /TNT-PM/Practica/tp5/src ejecutar

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

### Node-Red
Desde un navegador web pedir la pagina http://localhost/red

### Probador interno para mqtt alojado en nginx
Desde un navegador web pedir la pagina http://localhost/mqtt/test
