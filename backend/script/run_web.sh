#!/bin/sh

# wait for PSQL server to start
sleep 10

cd myproject
# prepare init migration
su -m appuser -c "python manage.py makemigrations executor"
# migrate db, so we have the latest db schema
su -m appuser -c "python manage.py migrate"
# start development server on public ip interface, on port 8000
su -m appuser -c "python manage.py runserver 0.0.0.0:8000"
