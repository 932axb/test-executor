from django.conf.urls import include, url
from django.contrib import admin

from apps.executor.views import TaskViewSet, EnvironmentViewSet, InterfaceViewSet, TemplateViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(prefix=r'tasks', viewset=TaskViewSet, base_name='tasks')
router.register(prefix=r'environment', viewset=EnvironmentViewSet, base_name='environment')
router.register(prefix=r'interface', viewset=InterfaceViewSet, base_name='interface')
router.register(prefix=r'template', viewset=TemplateViewSet, base_name='template')


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    # url(r'^api/', include('apps.tasks.urls')),


    url(r'^', include(router.urls)),

]
