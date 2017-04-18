#!/bin/bash

docker build -t shared-server-web ../src
docker run --name angularjs -p 81:80 -dit -v $PWD/../src:/var/www/html shared-server-web