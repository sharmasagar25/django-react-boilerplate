from django.urls import path, include
from rest_framework import routers

from .viewsets import TrackViewSet

router = routers.SimpleRouter()
router.register(r'tracks', TrackViewSet)

urlpatterns = router.urls
