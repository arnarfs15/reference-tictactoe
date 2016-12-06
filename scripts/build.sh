#!/bin/bash

export NODE_PATH=.
npm run clean #cleans the folder for a fresh working copy
npm run createbuild #creates the build folder, can be found in package.json
npm run buildclient #creates the client folder in build, can be found in package.json
mv client/build build/static #moves the client/build to static
cp -R server build/server #copies the entire server folder to build
mkdir -p build/client/src #creates the src folder in build/client
cp -r client/src/common build/client/src #copies the entire common folder to build/client
cp run.js build #copies run.js to build
