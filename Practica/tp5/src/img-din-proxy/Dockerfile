FROM node:alpine
MAINTAINER <poxi_man@yahoo.com>

RUN apk --update add bash

# creacion de carpetas
RUN mkdir -p /home/crud/src
RUN mkdir -p /home/proxy/src

WORKDIR /home/crud
ADD crud/package.json ./
RUN npm install
COPY crud/src src

WORKDIR /home/proxy
ADD proxy/package.json ./
RUN npm install
COPY proxy/src src

WORKDIR /home/proxy/src
CMD ["node", "index.js"]
