docker run -d --name cont_tmp --rm jllopis/mosquitto
docker cp cont_tmp:/etc/mosquitto ./img-mqtt-auth/etc/mosquitto
docker cp cont_tmp:/etc/mosquitto.d ./img-mqtt-auth/etc/mosquitto.d

docker stop cont_tmp
