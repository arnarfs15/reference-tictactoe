#!/bin/bash

set -e
  git clean -dfx        #cleans the directory
  git stash             #stashes all current git changes
  rm -rf node_modules   #removes the node modules file and all files within
  npm install           #installs npm at project root
  cd client/
  rm -rf node_modules   #removes the node_modules file and all files within from client
  npm install           #installs npm in client
  cd ..
  ./scripts/package.sh  #runs the package script

  echo 'Copying files to AWS'

  scp -o StrictHostKeyChecking=no -i "../arnarfs15.pem" ./docker-compose.yaml ec2-user@52.208.158.45:~/docker-compose.yaml
  scp -o StrictHostKeyChecking=no -i "../arnarfs15.pem" ./build/.env ec2-user@52.208.158.45:~/.env
exit 0
