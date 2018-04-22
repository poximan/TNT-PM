FROM node:alpine
MAINTAINER <poxi_man@yahoo.com>

# The COPY instruction copies new files or directories from <src> and adds them to the filesystem
# of the container at the path <dest>.
COPY ./storage-api.js /home/src/
COPY ./package.json /home/src/

# The RUN instruction will execute any commands in a new layer on top of the current image
# and commit the results. The resulting committed image will be used for the next step in the Dockerfile.
WORKDIR /home/src
RUN npm install

# There can only be one CMD instruction in a Dockerfile. If you list more than one CMD
# then only the last CMD will take effect. The main purpose of a CMD is to provide
# defaults for an executing container.
RUN apk --update add bash

COPY ./espera.sh ./
RUN chmod +x ./espera.sh
ENV SERVIDOR mongo
ENV PUERTO 27017
ENV COMANDO "node storage-api.js"

CMD ["bash", "./espera.sh"]
#RUN bash ./espera.sh
#CMD ["node", "storage-api.js"]
#CMD ["node", "--inspect-brk=0.0.0.0:9229", "conex-mongo.js"]
