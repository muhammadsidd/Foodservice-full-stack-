from rest_framework.serializers import ModelSerializer
from .models import Order
from users.models import User
from users.serializers import UserSerializer
from kitchens.models import Kitchen
from kitchens.serializers import KitchenSerializer
from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from rest_framework.serializers import ListField, DictField, PrimaryKeyRelatedField


class OrderSerializer(ModelSerializer):
    item = ListField(child=DictField())
    user = UserSerializer(many=False, read_only=True)
    kitchen = KitchenSerializer(many=False, read_only=True)
    
    class Meta:
        model = Order
        fields = "__all__"