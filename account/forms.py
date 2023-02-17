from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import User


class NewUserForm(UserCreationForm):

	class Meta:
		model = User
		fields = ("username", "password1", "password2")

