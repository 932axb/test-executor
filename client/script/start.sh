#!/bin/bash

cd /appcode;
npm install;
#npm run build-dist;

#node_modules/http-server/bin/http-server -p 8080 -a 0.0.0.0 dist
#node_modules/http-server/bin/http-server -p 8080 -a 0.0.0.0 src/public

npm run server