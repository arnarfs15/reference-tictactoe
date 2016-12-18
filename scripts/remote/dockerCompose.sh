#!/bin/bash

#sent to the AWS server and then used by the QStack server

docker-compose down

docker rmi $(docker images -q)

docker-compose up -d
