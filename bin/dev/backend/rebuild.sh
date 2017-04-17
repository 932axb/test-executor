#!/bin/bash

docker-compose -f docker-compose-dev.yml stop backend;
docker-compose -f docker-compose-dev.yml rm -f backend;
docker-compose -f docker-compose-dev.yml build backend;
docker-compose -f docker-compose-dev.yml up backend;