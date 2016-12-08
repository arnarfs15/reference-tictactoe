#!/bin/bash
docker stop $(sudo docker ps -qa) #inner function selects all containers, the outer stops them
docker rm $(sudo docker ps -qa) #inner function selects all containers, the outer removes them
