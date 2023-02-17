from django.urls import path

from .views import get_all_post, get_all_comments

urlpatterns = [
    path('all-post', view=get_all_post, name='all-post'),
    path('all-comment/<int:postId>', view=get_all_comments, name='all-comment')
]