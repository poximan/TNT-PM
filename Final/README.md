# Trabajo Práctico Final - TNT - UNPSJB

## Notas
Los trabajos se asignarán de manera individual.
Se expondrán el 25/7/2018 para completar la aprobación de la asignatura.
El alumno deberá inscribirse a examen regular para su presentación.

## Lenguaje Específico de Dominio reactivo
Consiste en la implementación de nodo que provea una forma de generar estilos de nodos, cambios de atributos o texto interno a partir de expresiones. Estas expresiones serán definidas como un DSL, o sistema de fórmulas. Estas definiciones estarán almacenadas en el nodo.
Los mensajes de entrada serán actualizaciones de los valores de las variables que componen la fórmula. Deberá a su vez asociar variables con tópicos MQTT.

![TNT](https://github.com/poximan/TNT-PM/blob/master/Final/imagenes/esquema.png?raw=true "Esquema")<br/>

## Solucion propuesta
Se construyó un nodo node-red que procesa su entrada de la siguiente forma:
1. Escucha todo tipo de mensajes que respeten el formato ```msg.topic``` estandar de node-red
2. Recupera el topico del mensaje y lo transforma a TAG estilo UPPER_CASE_SEPARADO_POR_GUION.
Por ejemplo el mensaje jerarquico /sitio/proceso/equipo/valor -> a tag plano SITIO_PROCESO_EQUIPO_VALOR = {valor}.
3. El tag obtenido es buscado en la lista de tags conocidos por el nodo.
Esta informacion es dinamica y depende de la lista actual de tags en la planilla con direccion local /TNT-PM/Final/dominio/formulas.xlsx.
4. Si se sabe que el tag existe se accede a planilla para levantar las filas completas que le referencian.
Cada fila respeta el formato ```{ tag, valor actual (entrada), referencia, formula, atributo para editar (salida)}```
5. Un iterador sobre las filas coincidentes reemplaza las referencias a celda por valores. Es un trabajo del tipo B2>C3 -> {int conocido}>{int conocido}
6. Se delega a un parser la expresion completa y se recupera el resultado.
El parser es una herramienta de analisis lexico y sintactico, que convierte una secuencia de simbolos en un arbol sintactico que describe una gramatica. La gramatica es capaz de resolver la operacion y retorna el resultado.

![TNT](https://github.com/poximan/TNT-PM/blob/master/Final/img-node-red/mis-nodos/node-red-contrib-dsl-gen/icons/parser.gif?raw=true "Esquema")<br/>

7. El resultado se empaqueta en un payload que respeta el formato del inciso 1.
8. Se envia el mensaje.

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
