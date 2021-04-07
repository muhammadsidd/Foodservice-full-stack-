from djongo import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.conf import settings
from kitchens.models import Kitchen, MenuItem
from django.utils.timezone import now


# Create your models here.
class Order(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, null=True, on_delete=models.SET_NULL
    )
    kitchen = models.ForeignKey(Kitchen, null=True, on_delete=models.SET_NULL)
    items = models.ArrayField(model_container=MenuItem)
    date_ordered = models.DateTimeField(null=False, default=now)
    total = models.DecimalField(
        null=False,
        max_digits=7,
        decimal_places=2,
        validators=[
            MinValueValidator(
                limit_value=0, message="Please insert a non-negative number."
            ),
            MaxValueValidator(
                limit_value=99_999.99,
                message="Total must be less than $100,000.",
            ),
        ],
    )
