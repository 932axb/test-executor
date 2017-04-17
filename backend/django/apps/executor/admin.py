from django.contrib import admin
from .models import Task, Template, Interface, Environment


@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    pass


@admin.register(Template)
class TemplateAdmin(admin.ModelAdmin):
    pass


@admin.register(Interface)
class InterfaceAdmin(admin.ModelAdmin):
    pass


@admin.register(Environment)
class EnvironmentAdmin(admin.ModelAdmin):
    pass
