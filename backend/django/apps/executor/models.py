from django.db import models


class Environment(models.Model):
    name = models.CharField(max_length=255, blank=False)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name


class Interface(models.Model):
    name = models.CharField(max_length=255, blank=False)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name


class Template(models.Model):
    name = models.CharField(max_length=255, blank=True)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name


class Task(models.Model):
    STATUSES = (
        ('pending', 'pending'),
        ('running', 'running'),
        ('finished', 'finished'),
        ('failed', 'failed'),
    )
    path = models.CharField(max_length=255, blank=True)
    status = models.CharField(choices=STATUSES, max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)
    finished_at = models.DateTimeField(auto_now=True)
    output = models.TextField(blank=True)
    requester = models.CharField(max_length=255, blank=False)
    environment = models.ForeignKey(Environment)
    interface = models.ForeignKey(Interface)
    template = models.ForeignKey(Template)

    def __str__(self):
        return "%s: %s" % (str(self.id), self.requester)

    def save(self, *args, **kwargs):
        super(Task, self).save(*args, **kwargs)
        if self.status == '':
            self.status = 'pending'
            if self.path == "":
                self.path = "success.py"
            from .tasks import executor
            executor.delay(task_id=self.id)