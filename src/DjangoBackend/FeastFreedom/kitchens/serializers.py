from .models import Kitchen
from users.serializers import UserSerializer
from rest_framework.serializers import (
    ModelSerializer,
    ListField,
    DictField,
    ImageField,
)


class KitchenSerializer(ModelSerializer):
    user = UserSerializer(many=False, read_only=True)
    workdays = ListField(child=DictField())
    menu = ListField(child=DictField())

    class Meta:
        model = Kitchen
        fields = "__all__"


class KitchenCreateSerializer(ModelSerializer):
    workdays = ListField(child=DictField())
    menu = ListField(child=DictField())

    class Meta:
        model = Kitchen
        fields = "__all__"
