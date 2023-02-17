from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, JsonResponse
from .models import User

@csrf_exempt
def signin_view(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']

        user = authenticate(username=username, password=password)

        if user is not None:
            login(request, user)

            json_string = {
                "uid": user.id,
                "username": user.username,
                "password": user.password,
            }
        else:
            json_string = {
                "uid": None,
                "username": None,
                "password": None,
            }


    return render(request, 'signin.html')

    # return JsonResponse(json_string)


def signout_view(request):
    logout(request)
    return redirect('account:signin')


def signup_view(request):

    if request.method == "POST":

        username = request.POST['username']
        password = request.POST['password']

        User.objects.create_user(username=username, password=password)

        user = authenticate(username=username, password=password)
        login(request, user)

        json_string = {
            "uid": user.id,
            "username": user.username,
            "password": user.password,
        }


        return JsonResponse(json_string)

