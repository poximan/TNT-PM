FROM node:8
MAINTAINER <poxi_man@yahoo.com>

WORKDIR /home/src

RUN mkdir -p embed

WORKDIR /home/src/embed
COPY embed/package*.json ./
RUN mkdir -p node_modules

RUN npm install -g npm
RUN npm install -g

COPY embed ./

WORKDIR /home/src
RUN mkdir -p mis-nodos
COPY mis-nodos ./mis-nodos

RUN mkdir -p .nodered
COPY mis-nodos/node-red-contrib-svg-storage /home/src/.nodered
WORKDIR /home/src/.nodered
RUN npm install

WORKDIR /home/src/embed
CMD ["node", "index.js"]
