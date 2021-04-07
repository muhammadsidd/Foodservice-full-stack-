from rest_framework.generics import (
    ListAPIView,
    CreateAPIView,
    RetrieveAPIView,
    UpdateAPIView,
    DestroyAPIView,
)
from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import FileUploadParser
from .serializers import KitchenSerializer, KitchenCreateSerializer
from .models import Kitchen


# Create your views here.
class KitchenListAPI(ListAPIView):
    queryset = Kitchen.objects.all()
    serializer_class = KitchenSerializer


class KitchenFeaturedListAPI(ListAPIView):
    queryset = Kitchen.objects.filter(featured=True)
    serializer_class = KitchenSerializer


class KitchenCreateAPI(CreateAPIView):
    queryset = Kitchen.objects.all()
    serializer_class = KitchenCreateSerializer


class KitchenDetailAPI(RetrieveAPIView):
    queryset = Kitchen.objects.all()
    serializer_class = KitchenSerializer


class KitchenByUserDetailAPI(RetrieveAPIView):
    lookup_field = "user__id"
    queryset = Kitchen.objects.all()
    serializer_class = KitchenSerializer


class KitchenUpdateAPI(UpdateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Kitchen.objects.all()
    serializer_class = KitchenCreateSerializer


class KitchenDeleteAPI(DestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Kitchen.objects.all()
    serializer_class = KitchenSerializer
