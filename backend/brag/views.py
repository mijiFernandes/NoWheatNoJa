import base64
import urllib
import json

from django.shortcuts import render, get_object_or_404
from django.http import HttpRequest, HttpResponse, JsonResponse, HttpResponseRedirect

from account.models import User
from .models import Post, Comment, Result
from .utils import get_postImage_url, get_serialize_quiz, serialize_comment, serialize_post, serialize_result

"""
views(hidden. data responses)
"""
def get_all_post(request: HttpRequest) -> JsonResponse:
    posts: Post = Post.objects.all()
    return JsonResponse(
        {
            'posts': [ serialize_post(p) for p in posts ]
        }
    )

def get_all_comments(request: HttpRequest, postId: int) -> JsonResponse:
    post = get_object_or_404(Post, id=postId)

    return JsonResponse(
        {
            'comments': [serialize_comment(c) for c in Comment.objects.filter(post=post)]
        }
    )

def submit_quiz_answer(request: HttpRequest) -> HttpResponseRedirect:
    pass