from djongo import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import (
    MinLengthValidator, 
    MaxLengthValidator, 
    RegexValidator, 
    ProhibitNullCharactersValidator
)
from .managers import KitchenUserManager


US_STATES = (
    ('AL', 'Alabama'),
    ('AK', 'Alaska'),
    ('AZ', 'Arizona'),
    ('AR', 'Arkansas'),
    ('CA', 'California'),
    ('CO', 'Colorado'),
    ('CT', 'Connecticut'),
    ('DC', 'District of Columbia'),
    ('DE', 'Delaware'),
    ('FL', 'Florida'),
    ('GA', 'Georgia'),
    ('HI', 'Hawaii'),
    ('ID', 'Idaho'),
    ('IL', 'Illinois'),
    ('IN', 'Indiana'),
    ('IA', 'Iowa'),
    ('KS', 'Kansas'),
    ('KY', 'Kentucky'),
    ('LA', 'Louisiana'),
    ('ME', 'Maine'),
    ('MD', 'Maryland'),
    ('MA', 'Massachusetts'),
    ('MI', 'Michigan'),
    ('MN', 'Minnesota'),
    ('MS', 'Mississippi'),
    ('MO', 'Missouri'),
    ('MT', 'Montana'),
    ('NE', 'Nebraska'),
    ('NV', 'Nevada'),
    ('NH', 'New Hampshire'),
    ('NJ', 'New Jersey'),
    ('NM', 'New Mexico'),
    ('NY', 'New York'),
    ('NC', 'North Carolina'),
    ('ND', 'North Dakota'),
    ('OH', 'Ohio'),
    ('OK', 'Oklahoma'),
    ('OR', 'Oregon'),
    ('PA', 'Pennsylvania'),
    ('RI', 'Rhode Island'),
    ('SC', 'South Carolina'),
    ('SD', 'South Dakota'),
    ('TN', 'Tennessee'),
    ('TX', 'Texas'),
    ('UT', 'Utah'),
    ('VT', 'Vermont'),
    ('VA', 'Virginia'),
    ('WA', 'Washington'),
    ('WV', 'West Virginia'),
    ('WI', 'Wisconsin'),
    ('WY', 'Wyoming'),
)

SECURITY_QUESTIONS = (
    ("What was your childhood nickname?", "What was your childhood nickname?"),
    ("What town/city did you live in as a child?", "What town/city did you live in as a child?"),
    ("What primary school did you attend?", "What primary school did you attend?"),
    ("What high school did you graduate from?", "What high school did you graduate from?"),
    ("What is your favorite movie?", "What is your favorite movie?"),
    ("What is your favorite song?", "What is your favorite song?"),
    ("What is your mother's maiden name?", "What is your mother's maiden name?"),
    ("What is the name of your first pet?", "What is the name of your first pet?"),
    ("What is your oldest sibling's name, excluding yourself?", "What is your oldest sibling's name, excluding yourself?"),
)

# Create your models here.
class User(AbstractUser):
    phone_number = models.CharField(
        max_length=12,
        null=False, 
        validators=[
            RegexValidator(
                regex="^\d{3}-\d{3}-\d{4}(-\d{2,6})?$",
                message="Please enter a valid phone number. (XXX-XXX-XXXX)"
            )
        ]
    )
    address = models.CharField(
        max_length=40,
        null=False,
        validators=[
            RegexValidator(
                regex="^\d{1,5} [a-zA-Z0-9\. ]+$",
                message="Please enter a valid street address."
            )
        ]
    )
    city = models.CharField(
        max_length=25,
        null=False,
        validators=[
            RegexValidator(
                regex="^[a-zA-Z\. -']+$",
                message="Please enter a valid city name."
            )
        ]
    )
    state = models.CharField(
        max_length=20,
        null=False,  
        choices=US_STATES
    )
    zip_code = models.CharField(
        max_length=10,
        null=False, 
        validators=[
            RegexValidator(
                regex="^\d{5}(-\d{4})?$",
                message="Please enter a valid ZIP code."
            )
        ]
    )
    question_one = models.CharField(
        null=False, 
        max_length=80, 
        choices=SECURITY_QUESTIONS,
        validators=[
            MinLengthValidator(
                limit_value=20, 
                message="Security question must be at least 20 characters long."
            ),
            MaxLengthValidator(
                limit_value=80,
                message="Security question must be at most 80 characters long."
            ),
            RegexValidator(
                regex="^[A-Za-z0-9 ,'//]{20,80}\?$",
                message="Please insert a valid security question."
            ),
            ProhibitNullCharactersValidator()
        ]
    )
    answer_one = models.CharField(
        null=False, 
        max_length=50, 
        validators=[
            MinLengthValidator(
                limit_value=2, 
                message="Answer must be at least 2 characters long."
            ),
            MaxLengthValidator(
                limit_value=80,
                message="Answer must be at most 50 characters long."
            ),
            RegexValidator(
                regex="^[A-Za-z0-9 ,'-:\?]{2,50}$",
                message="Please insert a valid answer."
            ),
            ProhibitNullCharactersValidator()
        ]
    )
    question_two = models.CharField(
        null=False, 
        max_length=80, 
        choices=SECURITY_QUESTIONS,
        validators=[
            MinLengthValidator(
                limit_value=20, 
                message="Security question must be at least 20 characters long."
            ),
            MaxLengthValidator(
                limit_value=80,
                message="Security question must be at most 80 characters long."
            ),
            RegexValidator(
                regex="^[A-Za-z0-9 ,'//]{20,}\?$",
                message="Please insert a valid security question."
            ),
            ProhibitNullCharactersValidator()
        ]
    )
    answer_two = models.CharField(
        null=False, 
        max_length=50, 
        validators=[
            MinLengthValidator(
                limit_value=2, 
                message="Answer must be at least 2 characters long."
            ),
            MaxLengthValidator(
                limit_value=80,
                message="Answer must be at most 50 characters long."
            ),
            RegexValidator(
                regex="^[A-Za-z0-9 ,'-:\?]{2,50}$",
                message="Please insert a valid answer."
            ),
            ProhibitNullCharactersValidator()
        ]
    )
    objects = KitchenUserManager()
