FROM jllopis/mosquitto
MAINTAINER <poxi_man@yahoo.com>

RUN apk --update add bash
RUN apk add make
RUN apk add cmake
RUN apk add gcc
RUN apk add g++
RUN apk add openssl

RUN mkdir src

WORKDIR src
RUN wget https://github.com/mongodb/mongo-c-driver/releases/download/1.10.3/mongo-c-driver-1.10.3.tar.gz
RUN tar xzf mongo-c-driver-1.10.3.tar.gz

WORKDIR ./mongo-c-driver-1.10.3
RUN mkdir cmake-build

WORKDIR ./cmake-build
RUN cmake ..
RUN make
RUN make install
