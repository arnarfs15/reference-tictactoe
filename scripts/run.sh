#!/bin/bash
set -e #if any operation fails, exits

sleep 10 #needs to wait for some time to load, needs to be done better
npm run migratedb #migrates the database
node run.js

exit 0
