from rest_framework.generics import (
    ListAPIView,
    CreateAPIView,
    RetrieveAPIView,
    UpdateAPIView,
    DestroyAPIView
)
from rest_framework.permissions import IsAuthenticated
from .serializers import UserSerializer
from .models import User


# Create your views here.
class UserListAPI(ListAPIView):
    queryset = User.objects.get_regular_users()
    serializer_class = UserSerializer


class UserCreateAPI(CreateAPIView):
    queryset = User.objects.get_regular_users()
    serializer_class = UserSerializer


class UserDetailAPI(RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserUpdateAPI(UpdateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = User.objects.get_regular_users()
    serializer_class = UserSerializer


class UserDeleteAPI(DestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = User.objects.get_regular_users()
    serializer_class = UserSerializer


class KitchenUserListAPI(ListAPIView):
    queryset = User.objects.get_kitchen_users()
    serializer_class = UserSerializer


class KitchenUserCreateAPI(CreateAPIView):
    queryset = User.objects.get_kitchen_users()
    serializer_class = UserSerializer


class KitchenUserUpdateAPI(UpdateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = User.objects.get_kitchen_users()
    serializer_class = UserSerializer


class KitchenUserDeleteAPI(DestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = User.objects.get_kitchen_users()
    serializer_class = UserSerializer