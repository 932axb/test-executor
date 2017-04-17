#!/bin/bash

docker-compose -f docker-compose-dev.yml stop nginx
docker-compose -f docker-compose-dev.yml rm -f nginx
docker-compose -f docker-compose-dev.yml build nginx