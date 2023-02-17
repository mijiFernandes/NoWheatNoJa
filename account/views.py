from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt
from .forms import NewUserForm

@csrf_exempt
def signin_view(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']

        user = authenticate(username=username, password=password)

        if user is not None:
            login(request, user)

    return render(request, 'signin.html')


def signout_view(request):
    logout(request)
    return redirect('account:signin')


def signup_view(request):

    if request.method == "POST":
        form = NewUserForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            return render(request, 'signin.html')
    else:
        form = NewUserForm()

    return render(request, template_name="register.html", context={"register_form": form})
