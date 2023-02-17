from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    coin = models.IntegerField(default=0)
