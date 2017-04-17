
from django.shortcuts import render, get_object_or_404
from .models import Task, Environment, Interface, Template
from .serializers import TaskSerializer, TaskDetailSerializer, EnvironmentSerializer, InterfaceSerializer, \
    TemplateSerializer
from rest_framework import generics, viewsets
from rest_framework.response import Response


class TaskViewSet(viewsets.ViewSet):

    def list(self, request):
        queryset = Task.objects.all().order_by('-created_at')
        serializer = TaskSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = Task.objects.all()
        task = get_object_or_404(queryset, pk=pk)
        serializer = TaskDetailSerializer(task)
        return Response(serializer.data)

    def create(self, request):

        requester = request.data.get("requester")
        path = request.data.get("path")
        interface_id = request.data.get("interface")
        interface = Interface.objects.get(id=interface_id)

        template_id = request.data.get("template")
        template = Template.objects.get(id=template_id)

        environment_id = request.data.get("environment")
        environment = Environment.objects.get(id=environment_id)

        task = Task.objects.create(requester=requester, environment=environment, interface=interface,
                                   template=template, path=path)
        serializer = TaskSerializer(task)

        return Response(serializer.data)


class EnvironmentViewSet(viewsets.ViewSet):
    """
    Environment viewset.
    """
    def list(self, request):
        """
        :param request:
        :return: serialized list of environments
        """
        queryset = Environment.objects.all()
        serializer = EnvironmentSerializer(queryset, many=True)
        return Response(serializer.data)


class InterfaceViewSet(viewsets.ViewSet):
    """
    Interface viewset.
    """
    def list(self, request):
        """
        :param request:
        :return: serialized list of environments
        """
        queryset = Interface.objects.all()
        serializer = InterfaceSerializer(queryset, many=True)
        return Response(serializer.data)


class TemplateViewSet(viewsets.ViewSet):
    """
    Template viewset.
    """
    def list(self, request):
        """
        :param request:
        :return: serialized list of templates
        """
        queryset = Template.objects.all()
        serializer = TemplateSerializer(queryset, many=True)
        return Response(serializer.data)

