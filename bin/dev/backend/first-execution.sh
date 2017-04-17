#!/bin/bash

SOURCE=`dirname $0`

# prepare database
echo "\n\nmigration django databases"
sh $SOURCE/run-django_migrate.sh

echo "\n\ncreate django superuser"
sh $SOURCE/run-django_createsuperuser.sh
