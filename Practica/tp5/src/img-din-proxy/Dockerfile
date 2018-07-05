FROM node:alpine
MAINTAINER <poxi_man@yahoo.com>

RUN apk --update add bash

# creacion de carpetas
RUN mkdir -p /home/auth-crud/src
RUN mkdir -p /home/red-crud/src
RUN mkdir -p /home/proxy/src

# desplegar servicio publicadores/suscriptores mqtt autorizados
WORKDIR /home/auth-crud
ADD auth-crud/package.json ./
ADD auth-crud/propiedades.json ./
RUN npm install
COPY auth-crud/src src

# desplegar servicio proyectos node-red en curso
WORKDIR /home/red-crud
ADD red-crud/package.json ./
ADD red-crud/propiedades.json ./
RUN npm install
COPY red-crud/src src

WORKDIR /home/proxy
ADD proxy/package.json ./
RUN npm install
COPY proxy/src src

WORKDIR /home/proxy/src
CMD ["node", "index.js"]
