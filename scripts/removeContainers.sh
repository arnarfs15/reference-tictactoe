#!/bin/bash
sudo docker stop $(sudo docker ps -qa) #inner function selects all containers, the outer stops them
sudo docker rm $(sudo docker ps -qa) #inner function selects all containers, the outer removes them
