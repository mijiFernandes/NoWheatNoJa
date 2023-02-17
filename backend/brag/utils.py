import json

from .models import Post, PostImage, Comment, Result

def serialize_post(post: Post):
    data = {
        'uid': post.id,
        'hashid': post.hashId,
        'createdDate': post.createdDate.strftime('%Y/%m/%d, %H:%M:%S'),
        'modifiedDate': post.modifiedDate.strftime('%Y/%m/%d, %H:%M:%S'),
        'writer': post.writer.id,
        'title': post.title,
        'content': post.content,
        'images': [ get_postImage_url(img) for img in post.images.all() ]
    }

    return data

def get_postImage_url(postImg: PostImage):
    return postImg.image.url

def serialize_comment(comment: Comment):
    p = Result.objects.get(viewer=comment.writer, post=comment.post)
    
    data = {
        'uid': comment.id,
        'post': comment.post.id,
        'createdDate': comment.createdDate.strftime('%Y/%m/%d, %H:%M:%S'),
        'modifiedDate': comment.modifiedDate.strftime('%Y/%m/%d, %H:%M:%S'),
        'writer': comment.writer.id,
        'content': comment.content,
        'isChosen': p.isChosen,
        'score': p.quizScore
    }

    return data

def get_serialize_quiz(post: Post):
    decoder = json.decoder.JSONDecoder()
    
    data = {
        'quizs': decoder.decode(post.quiz),
    }

    return data

def serialize_result(result: Result):
    data = {
        'uid': result.id,
        'viewer': result.viewer.id,
        'post': result.post.id,
        'quizSolved': result.quizSolved.strftime('%Y/%m/%d, %H:%M:%S'),
        'choice': result.choices.split(';'),
        'quizScore': result.quizScore,
        'isChosen': result.isChosen
    }

    return data