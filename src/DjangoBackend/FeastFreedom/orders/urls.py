from django.urls import path
from . import views

app_name = "orders"

urlpatterns = [
    path("", views.OrderListAPI.as_view(), name="list"),
    path("<int:pk>/", views.OrderListAPI.as_view(), name="list"),
    path("create/", views.OrderCreateAPI.as_view(), name="create"),
]