#!/bin/bash

set -e # Explota al primer error

echo "Intentando conectar a $SERVIDOR:$PUERTO"
while :
do
  nc -z $SERVIDOR $PUERTO && break
  sleep 1
done
$COMANDO
