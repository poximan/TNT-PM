FROM node:alpine
MAINTAINER <poxi_man@yahoo.com>

RUN apk --update add bash

# creacion de carpetas
RUN mkdir -p /home/crud/src

WORKDIR /home/crud
ADD ./package.json ./
RUN npm install
COPY ./src src

WORKDIR /home/crud/src
CMD ["node", "index.js"]
