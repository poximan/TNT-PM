# tp4 de Taller de Nuevas Tecnologias - UNPSJB
Broker de mensajes MQTT

## Enunciado
1. Descargue la biblioteca cliente MQTT para JavaScript (cliente web) y cree una subscripción a un tópico en una vista Express. Publique a este tópico desde NodeRED utilizando el Broker de mensajes y reciba la salida en el cliente, utilizando D3 sobre elementos DOM (no jQuery). Puede utilizar una lista, o un textarea . Para esto utilizará el proxy reverso, accediendo al transporte WebSockets de mosquitto.

2. Genere un árbol de tópicos del estilo: /PM/Brewery/P1/valor1 , dónde el prefijo PM indica la ubicación geográfica, Brewery el proceso de general fabricación de cerveza, P1 un subproceso, y valor1 un valor de medida.
Utilizando el node-red-dashboard permita ingresar los valores de diversos procesos, publicándolos en el broker MQTT.

3. Utilizando un gráfico SVG a dónde se utilicen identificadores acordes a los sub-procesos del punto 3, genere el código necesario para que las publicaciones efectúen cambios sobre atributos (ej: text , fill , stroke ).
Si lo cree conveniente puede utilizar clases CSS (al menos debe funcionar en 2 navegadores).

4. A partir del código del punto 2, haga que los valores sean persistentes (retained). ¿Qué diferencia hay con una API REST? ¿Y con un broker AMQP?

5. Modifique el SVGStorage del práctico anterior para publicar, de forma persistente, los archivos que se suben (puede utilizar el nombre como parte del tópico, siempre que no tenga caracteres ilegales).

6. Agregue autenticación a MQTT (investigue si existen imágenes de mosquitto que provean esta funcionalidad). ¿Qué sería necesario para asegurar que las credenciales no viajan en texto plano?

## Requisitos del sistema
* Debe estar instalado Docker, gestor de contenedores virtuales (https://www.docker.com/). Este proyecto fue desarrollado con v17.12.0.

## Ejecutar el sistema
Clonar el proyecto https://github.com/poximan/TNT-PM.git

Desde la carpeta /TNT-PM/Practica/tp4/src ejecutar

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
