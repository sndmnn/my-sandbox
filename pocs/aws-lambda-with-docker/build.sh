# !/bin/bash

echo $IMAGE_NAME

docker build . -t $IMAGE_NAME
