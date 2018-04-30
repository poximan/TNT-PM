# tp3 de Taller de Nuevas Tecnologias - UNPSJB
Creación de Nodos y uso de File API de HTML5 para archivos SVG

## Enunciado
1. Integre NodeRED en una aplicación Express. Utilice el proyecto heredado del práctico anterior.
2. Agregue una vista en la aplicación que contiene a NodeRED que sirva a través de HTTP un formulario que utilice la File API de HTML5. Inyecte los contenidos en un formulario mediante manipulación de DOM como entradas ocultas.
3. Basándose en la guía oficial de NodeRED cree un Nodo llamado SVGStorage que almacene dentro de la definición archivos SVG.
4. Agregue a SVGStorage la capacidad de responder a mensajes desde nodos HTTP. No debe crear nuevos objetos como respuestas, sino aumentar las entradas. Ante un mensaje
```
{
  topic: "svg-list"
}
```
debe ser capaz de responder con un diccionario de objetos SVG (archivos) almacenados (a través del pto 3.). Ej:
```
{
  topic: "svg-list"
  payload: [
    {
      id: 'file-1',
      name: 'Diagrama 1'
    },
    {
      id: 'file-1',
      name: 'Diagrama 2'
    }
  ]
}
```
5. Agregue a SVGStorage la capacidad de responder mensajes donde el tópico sea svg-get-<id>. El payload debe ser el contenido del archivo.
```
{
  topic: "svg-get-ID"
}
```
6. Agregue el código necesario para poder obtener los archivos si los mensajes son ingresados a través de un nodo de entrada HTTP. Cree un flujo con entrada HTTP, su nodo y un nodo de salida

## Requisitos del sistema
* Debe estar instalado Docker, gestor de contenedores virtuales (https://www.docker.com/). Este proyecto fue desarrollado con v17.12.0.

## Ejecutar el sistema
Clonar el proyecto https://github.com/poximan/TNT-PM.git

Desde la carpeta /TNT-PM/Practica/tp3/src ejecutar

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
Desde un navegador web pedir la pagina http://localhost/flow/red

### API Red
Desde un navegador web pedir la pagina http://localhost/flow/api

### Probador interno para mqtt alojado en nginx
Desde un navegador web pedir la pagina http://localhost/msg/test
