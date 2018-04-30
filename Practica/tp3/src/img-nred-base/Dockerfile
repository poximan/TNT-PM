FROM node:alpine
MAINTAINER <poxi_man@yahoo.com>

WORKDIR /home/src/

# The COPY instruction copies new files or directories from <src> and adds them to the filesystem
# of the container at the path <dest>.
COPY ./package.json ./

# The RUN instruction will execute any commands in a new layer on top of the current image
# and commit the results. The resulting committed image will be used for the next step in the Dockerfile.
RUN npm install --unsafe-perm

RUN apk --update add bash

WORKDIR /home/src/api

CMD ["node", "index.js"]
