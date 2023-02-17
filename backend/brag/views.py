import base64
import urllib
import random

from django.shortcuts import render
from django.http import HttpRequest, HttpResponse, JsonResponse, HttpResponseRedirect

from ..account.models import User
from .models import Post, Comment, Result

"""
views(can actually see it)
"""
def view_index(request: HttpRequest) -> HttpResponse:
    pass

def view_post(request: HttpRequest, post_id: str) -> HttpResponse:

    return None

def view_quiz(request: HttpRequest, post_id: str) -> HttpResponse:
    pass

"""
views(hidden. data responses)
"""
def get_all_post(request: HttpRequest) -> JsonResponse:
    post: Post = Post.objects.get()

    return JsonResponse({

    })

def submit_quiz_answer(request: HttpRequest) -> HttpResponseRedirect:
    pass