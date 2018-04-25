docker run -d --name cont_tmp --rm src_node-red
docker cp cont_tmp:/home/src/node_modules/node-red ./img-node-red
docker cp cont_tmp:/home/src/node_modules/node-red/red/runtime/storage ./img-node-red
docker stop cont_tmp
