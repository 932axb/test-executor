#!/bin/bash

docker-compose -f docker-compose-dev.yml stop;
docker-compose -f docker-compose-dev.yml rm -f;
