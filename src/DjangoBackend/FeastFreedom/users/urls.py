from django.urls import path
from . import views

app_name = "users"

urlpatterns = [
    path("", views.UserListAPI.as_view(), name="user_list"),
    path("create/", views.UserCreateAPI.as_view(), name="user_create"),
    path("<int:pk>/", views.UserDetailAPI.as_view(), name="user_detail"),
    path("<int:pk>/update/", views.UserUpdateAPI.as_view(), name="user_update"),
    path("<int:pk>/delete/", views.UserDeleteAPI.as_view(), name="user_delete"),
    path("kitchens/", views.KitchenUserListAPI.as_view(), name="kitchen_user_list"),
    path("kitchens/create/", views.KitchenUserCreateAPI.as_view(), name="kitchen_user_create"),
    path("kitchens/<int:pk>/update/", views.KitchenUserUpdateAPI.as_view(), name="kitchen_user_update"),
    path("kitchens/<int:pk>/delete/", views.KitchenUserDeleteAPI.as_view(), name="kitchen_user_delete"),
]