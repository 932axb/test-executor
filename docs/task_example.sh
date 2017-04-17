rabbitmqctl list_queues


from apps.executor.tasks import test


test.delay(1,2)


test(1,2)



from myproject.tasks import power