docker run -d --name cont_tmp --rm eclipse-mosquitto
docker cp cont_tmp:/etc/mosquitto ./img-mosquitto/etc-mosq
docker cp cont_tmp:/mosquitto ./img-mosquitto/root-mosq

docker stop cont_tmp
