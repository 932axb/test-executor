from rest_framework import serializers
from .models import Task, Environment, Interface, Template


class TaskSerializer(serializers.HyperlinkedModelSerializer):
    """
    Task serializer
    """
    environment = serializers.StringRelatedField()
    interface = serializers.StringRelatedField()
    template = serializers.StringRelatedField()

    class Meta:
        model = Task
        fields = ('id', 'requester', 'created_at', 'finished_at',
                  'status', 'template', 'environment', 'interface', 'status',)


class TaskDetailSerializer(serializers.HyperlinkedModelSerializer):
    """
    Task detail serializer
    """
    template = serializers.StringRelatedField()
    environment = serializers.StringRelatedField()
    interface = serializers.StringRelatedField()

    class Meta:
        model = Task
        fields = ('id', 'output', 'created_at', 'finished_at', 'status',
                  'template', 'environment', 'interface', 'path', 'requester',)


class EnvironmentSerializer(serializers.Serializer):
    """
    Environment serializer
    """
    id = serializers.IntegerField()
    name = serializers.CharField()

    class Meta:
        models = Environment


class InterfaceSerializer(serializers.Serializer):
    """
    Interface serializer
    """
    id = serializers.IntegerField()
    name = serializers.CharField()

    class Meta:
        models = Interface


class TemplateSerializer(serializers.Serializer):
    """
    Interface serializer
    """
    id = serializers.IntegerField()
    name = serializers.CharField()

    class Meta:
        models = Template
