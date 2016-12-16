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
exit 0
