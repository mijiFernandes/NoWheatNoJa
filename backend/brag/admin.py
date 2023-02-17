from django.contrib import admin

from .models import Post, PostImage, Comment, Result

# Register your models here.
admin.site.register(Post)
admin.site.register(PostImage)
admin.site.register(Comment)
admin.site.register(Result)