FROM node:carbon
MAINTAINER <poxi_man@yahoo.com>

WORKDIR /home/embed
COPY embed/package.json ./
RUN npm install

RUN mkdir -p src
COPY embed/src src

WORKDIR /home
RUN mkdir -p mis-nodos
ADD mis-nodos mis-nodos

WORKDIR /home/embed
RUN npm install /home/mis-nodos/node-red-contrib-svg-storage

WORKDIR /home/embed/src
CMD ["node", "index.js"]
#CMD ["node", "--inspect-brk=0.0.0.0:9229", "index.js"]
#CMD ["node", "--inspect=0.0.0.0:9229", "index.js"]
