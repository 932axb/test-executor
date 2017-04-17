#!/bin/bash

docker-compose -f docker-compose-dev.yml stop client;
docker-compose -f docker-compose-dev.yml rm -f client;
docker-compose -f docker-compose-dev.yml build client;
docker-compose -f docker-compose-dev.yml up client;