docker run -d --name cont_tmp --rm pto1_node-red
docker cp cont_tmp:/home/src/node_modules/node-red/red/runtime/storage ./img-node-red
docker stop cont_tmp
