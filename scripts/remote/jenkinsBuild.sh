#!/bin/bash

set -e
  ./scripts/remote/npm-install
  ./scripts/package.sh  #runs the package script

  echo 'Running tests and making XML files'

  mkdir -p tests
  npm run xml-test

  echo 'Copying files to AWS'

  scp -o StrictHostKeyChecking=no -i "../arnarfs15.pem" ./docker-compose.yaml ec2-user@52.208.158.45:~/docker-compose.yaml
  scp -o StrictHostKeyChecking=no -i "../arnarfs15.pem" ./build/.env ec2-user@52.208.158.45:~/.env
exit 0
