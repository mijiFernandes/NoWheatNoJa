from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
import time

from .models import *

import json


def list_view(request):
    post_list = Post.objects.order_by('createdDate')

    json_list = []

    for post in post_list:

        json_string = {
            "uid": post.id,
            "hashid": post.hashId,
            "createdDate": f"{post.createdDate}",
            "modifiedDate": f"{post.modifiedDate}",
            "writer": post.writer.id,
            "title": post.title,
            "content": post.content,
        }

        json_list.append(json_string)

    a = json.dumps(json_list)

    return HttpResponse(a)
