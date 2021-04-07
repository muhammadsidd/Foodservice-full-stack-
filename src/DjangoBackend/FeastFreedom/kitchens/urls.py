from django.urls import path
from . import views

app_name = "kitchens"

urlpatterns = [
    path("", views.KitchenListAPI.as_view(), name="list"),
    path("featured/", views.KitchenListAPI.as_view(), name="featured"),
    path("create/", views.KitchenCreateAPI.as_view(), name="create"),
    path("<int:pk>/", views.KitchenDetailAPI.as_view(), name="detail"),
    path("<int:pk>/update/", views.KitchenUpdateAPI.as_view(), name="update"),
    path("<int:pk>/delete/", views.KitchenDeleteAPI.as_view(), name="delete"),
    path("byuser/<int:user__id>/", views.KitchenByUserDetailAPI.as_view(), name="delete"),
]