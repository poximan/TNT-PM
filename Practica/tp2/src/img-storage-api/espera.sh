#!/bin/bash
#set -e # sale al primer error
echo "Intentando conectar a $SERVIDOR:$PUERTO"
while :
do
  netcat -z $SERVIDOR $PUERTO && break
  #sleep 1
done
#$COMANDO
