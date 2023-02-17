from django.urls import path
from . import views

app_name = 'account'

urlpatterns = [
    path('login/', views.signin_view, name='signin'),
    path('logout/', views.signout_view, name='signout'),
    path('register/', views.signup_view, name='signup'),
]