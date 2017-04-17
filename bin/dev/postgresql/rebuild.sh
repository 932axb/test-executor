#!/bin/bash

docker-compose -f docker-compose-dev.yml stop postgres
docker-compose -f docker-compose-dev.yml rm -f postgres
docker-compose -f docker-compose-dev.yml build postgres