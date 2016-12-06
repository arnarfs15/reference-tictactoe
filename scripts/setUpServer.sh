#!/bin/bash
set -e
  sudo yum update -y #checks for updates on the instance server
  sudo yum install -y docker # installs docker on the instance server
  sudo service docker start #starts docker on the instance server
  sudo yum install -y git-all #installs git on the instance server
  sudo curl -L "https://github.com/docker/compose/releases/download/1.9.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose # fetches docker-compose and sets it up on the server
  sudo chmod +x /usr/local/bin/docker-compose #allows execution on docker-compose
exit 0
