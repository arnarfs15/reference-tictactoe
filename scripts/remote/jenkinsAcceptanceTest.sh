#!/bin/bash

./scripts/remote/npm-install.sh #npm needs to be installed so the tests can be run
npm run apitest                 #runs the apitests, script can be found in package.json
