#!/bin/bash
./scripts/removeContainers.sh
./scripts/removeImages.sh

npm run startdockerdb
sudo npm run start-dev
cd ./client
npm run start
