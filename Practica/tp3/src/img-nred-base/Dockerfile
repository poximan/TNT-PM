FROM node:alpine
MAINTAINER <poxi_man@yahoo.com>

WORKDIR /home/src/

# The COPY instruction copies new files or directories from <src> and adds them to the filesystem
# of the container at the path <dest>.
COPY ./package.json ./

# The RUN instruction will execute any commands in a new layer on top of the current image
# and commit the results. The resulting committed image will be used for the next step in the Dockerfile.
RUN npm install
COPY ./index.js ./

RUN apk --update add bash

CMD ["node", "index.js"]
#CMD ["node", "--inspect-brk=0.0.0.0:9229", "node_modules/node-red/red.js", "-u", "."]
