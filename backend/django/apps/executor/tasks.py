from __future__ import absolute_import, unicode_literals
from django.conf import settings
from config.celeryconf import app
from .models import Task


@app.task
def executor(task_id):
    task = Task.objects.get(id=task_id)

    import subprocess
    # create new subprocess
    related_path = settings.TEST_PATH_PREFIX + task.path
    proc = subprocess.Popen("python " + related_path, shell=True,
                             stderr=subprocess.STDOUT, stdout=subprocess.PIPE)
    task.status = "running"
    task.save()
    full_log = ""
    while True:
        line = proc.stdout.readline()
        if line != b'':
            full_log += line.decode('utf-8', 'ignore')
        else:
            break

    if "FAILED" in full_log:
        task.status = "failed"    # set task as finished
    else:
        task.status = "success"

    task.output = full_log
    task.save()

    return True