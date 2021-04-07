from django.shortcuts import render
from rest_framework.generics import (
    ListAPIView,
    CreateAPIView,
    RetrieveAPIView
)
from .models import Order
from .serializers import OrderSerializer

# Create your views here.
class OrderListAPI(ListAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class OrderCreateAPI(CreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class OrderDetailAPI(RetrieveAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer