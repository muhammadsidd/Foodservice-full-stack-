from djongo import models
from django.core.validators import (
    MinLengthValidator,
    MaxLengthValidator,
    RegexValidator,
    ProhibitNullCharactersValidator,
    MinValueValidator,
    MaxValueValidator,
)
from django.conf import settings
from datetime import time
from PIL import Image

DAYS = (
    ("Monday", "Monday"),
    ("Tuesday", "Tuesday"),
    ("Wednesday", "Wednesday"),
    ("Thursday", "Thursday"),
    ("Friday", "Friday"),
    ("Saturday", "Saturday"),
    ("Sunday", "Sunday"),
)


# Create your models here.
class MenuItem(models.Model):
    name = models.CharField(
        null=False,
        max_length=50,
        validators=[
            MinLengthValidator(
                limit_value=3,
                message="Name must be at least 3 characters long.",
            ),
            MaxLengthValidator(
                limit_value=50,
                message="Name must be at most 50 characters long.",
            ),
            RegexValidator(
                regex="^[A-Za-z0-9 //,'-]{3,50}$",
                message="Please insert a valid name.",
            ),
            ProhibitNullCharactersValidator(),
        ],
    )
    vegan = models.BooleanField(null=False, default=False)
    price = models.DecimalField(
        max_digits=9,
        decimal_places=2,
        null=False,
        default=0,
        validators=[
            MinValueValidator(
                limit_value=0, message="Please insert a non-negative number."
            ),
            MaxValueValidator(
                limit_value=1_000_000,
                message="Price must not exceed $1 million.",
            ),
        ],
    )

    class Meta:
        abstract = True


class WorkDay(models.Model):
    day = models.CharField(
        null=False,
        max_length=9,
        choices=DAYS,
        validators=[
            MinLengthValidator(
                limit_value=6, message="Day must be at least 6 characters long."
            ),
            MaxLengthValidator(
                limit_value=9, message="Day must be at most 9 characters long."
            ),
            RegexValidator(
                regex="^(Mon|Tues|Wednes|Thurs|Fri|Satur)day$",
                message="Please insert a valid name.",
            ),
            ProhibitNullCharactersValidator(),
        ],
    )
    start_time = models.CharField(
        null=False,
        max_length=8,
        validators=[
            MinLengthValidator(
                limit_value=7,
                message="Start time must be at least 7 characters long.",
            ),
            MaxLengthValidator(
                limit_value=8,
                message="Start time must be at most 8 characters long.",
            ),
            RegexValidator(
                regex="^(1[012]|[1-9]):[0-5]\d [AP]M$",
                message="Please insert a valid start time.",
            ),
            ProhibitNullCharactersValidator(),
        ],
    )
    end_time = models.CharField(
        null=False,
        max_length=8,
        validators=[
            MinLengthValidator(
                limit_value=7,
                message="End time must be at least 7 characters long.",
            ),
            MaxLengthValidator(
                limit_value=8,
                message="End time must be at most 8 characters long.",
            ),
            RegexValidator(
                regex="^(1[012]|[1-9]):[0-5]\d [AP]M$",
                message="Please insert a valid end time.",
            ),
            ProhibitNullCharactersValidator(),
        ],
    )

    class Meta:
        abstract = True


class Kitchen(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE
    )
    name = models.CharField(
        null=False,
        max_length=50,
        validators=[
            MinLengthValidator(
                limit_value=2,
                message="Name must be at least 2 characters long.",
            ),
            MaxLengthValidator(
                limit_value=50,
                message="Name must be at most 50 characters long.",
            ),
            RegexValidator(
                regex="^[A-Za-z0-9: ,'&@-]{2,50}$",
                message="Please insert a valid name.",
            ),
            ProhibitNullCharactersValidator(),
        ],
    )
    featured = models.BooleanField(null=False, default=False)
    workdays = models.ArrayField(model_container=WorkDay)
    menu = models.ArrayField(model_container=MenuItem)
    image = models.TextField(max_length=200, blank=True, default="localhost:8000/media/default.jpg")
