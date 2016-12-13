#!/bin/bash
docker stop $(docker ps -qa) #inner function selects all containers, the outer stops them
docker rm $(docker ps -qa) #inner function selects all containers, the outer removes them
