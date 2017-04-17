#!/bin/sh

# wait for RabbitMQ server to start
sleep 10

cd /code
# run Celery worker for our project myproject with Celery configuration stored in Celeryconf
#su -m appuser -c "celery worker --app=config.celeryconf -Q default -n default@%h"

su -m appuser -c "celery worker --app=config.celeryconf -Q default -n default@%h --loglevel=INFO"

#celery worker -A config.celeryconf -Q default -n default@%h



#  su -m appuser -c "celery worker -A config.celeryconf -Q default -n default@%h"