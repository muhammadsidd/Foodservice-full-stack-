# Generated by Django 3.0.5 on 2021-04-05 19:43

from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion
import djongo.models.fields
import kitchens.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Kitchen',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, validators=[django.core.validators.MinLengthValidator(limit_value=2, message='Name must be at least 2 characters long.'), django.core.validators.MaxLengthValidator(limit_value=50, message='Name must be at most 50 characters long.'), django.core.validators.RegexValidator(message='Please insert a valid name.', regex="^[A-Za-z0-9: ,'&@-]{2,50}$"), django.core.validators.ProhibitNullCharactersValidator()])),
                ('featured', models.BooleanField(default=False)),
                ('workdays', djongo.models.fields.ArrayField(model_container=kitchens.models.WorkDay)),
                ('menu', djongo.models.fields.ArrayField(model_container=kitchens.models.MenuItem)),
                ('image', models.ImageField(default='default.jpg', upload_to='kitchen_imgs')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]