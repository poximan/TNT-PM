FROM node:alpine
MAINTAINER <poxi_man@yahoo.com>

RUN apk --update add bash

WORKDIR /home
COPY package.json ./
RUN npm install -g browserify
RUN npm install
WORKDIR /home/node_modules/mqtt
RUN npm install .
RUN browserify mqtt.js -s mqtt > browserMqtt.js

# COPY src .
# CMD ["node", "index.js"]
