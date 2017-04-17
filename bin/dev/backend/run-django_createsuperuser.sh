#!/bin/bash

docker-compose -f docker-compose-dev.yml run backend python manage.py createsuperuser;
