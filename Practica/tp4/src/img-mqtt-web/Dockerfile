FROM node:alpine
MAINTAINER <poxi_man@yahoo.com>

RUN apk --update add bash

WORKDIR /home
COPY package.json ./
RUN npm install

COPY src .
CMD ["node", "index.js"]
