FROM node:alpine
MAINTAINER <poxi_man@yahoo.com>

# creacion de carpetas
RUN mkdir -p /home/embed/src
RUN mkdir -p /home/mis-nodos
RUN mkdir -p /home/src/.nodered/

WORKDIR /home/src/.nodered/
RUN npm install node-red-dashboard

ADD embed/package.json /home/embed

WORKDIR /home/embed
RUN npm install
COPY embed/src src
COPY mis-nodos ../mis-nodos

RUN npm install /home/mis-nodos/node-red-contrib-svg-storage

WORKDIR /home/embed/src
CMD ["node", "index.js"]
