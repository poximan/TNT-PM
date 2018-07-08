# Trabajo Práctico Final - Taller de Nuevas Tecnologias - UNPSJB

## Notas
Los trabajos se asignarán de manera individual. Se expondrán el 25/7/2018 para completar la aprobación de la asignatura. El alumno deberá inscribirse a examen regular para su presentación.

## Lenguaje Específico de Dominio reactivo
Consiste en la implementación de nodo que provea una forma de generar estilos de nodos, cambios de atributos o texto interno a partir de expresiones. Estas expresiones serán definidas como un DSL, o sistema de fórmulas. Estas definiciones estarán almacenadas en el nodo.
Los mensajes de entrada serán actualizaciones de los valores de las variables que componen la fórmula. Deberá a su vez asociar variables con tópicos MQTT.

## Requisitos del sistema
* Debe estar instalado Docker, gestor de contenedores virtuales (https://www.docker.com/). Este proyecto fue desarrollado con v17.12.0.

## Ejecutar el sistema
Clonar el proyecto https://github.com/poximan/TNT-PM.git

Desde la carpeta ./Final ejecutar alguno de los siguientes comandos...

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

### Para ejecutar una app dentro del servicio
```
docker-compose run {nombre servicio} {app}
```
por ejemplo ```docker-compose run node-red bash```

### Node-Red
Desde un navegador web pedir la pagina http://localhost:8000/red
