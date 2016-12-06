#!/bin/bash

#securely copies the docker-compose file over to the ec2 instance
scp -o StrictHostKeyChecking=no -i "arnarfs15.pem" ./docker-compose.yaml ec2-user@52.208.158.45:~/docker-compose.yaml
