from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated

from .serializers import TrackSerializer
from .models import Track

class TrackViewSet(ModelViewSet):
    """
    A simple ViewSet for viewing and editing tracks.
    """
    queryset = Track.objects.all()
    serializer_class = TrackSerializer
    permission_classes = [IsAuthenticated]