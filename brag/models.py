from django.db import models
from hashids import Hashids

from account.models import User

hashids = Hashids(salt="happyHacking", min_length=10)


class PostImage(models.Model):
    image = models.ImageField(upload_to='images/')


class Post(models.Model):
    createdDate = models.DateTimeField(auto_now_add=True)
    modifiedDate = models.DateTimeField(auto_now=True)

    # fixme: on_deletion??
    writer = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    content = models.TextField()

    images = models.ManyToManyField(PostImage, null=True)

    """
    quiz : {
		lastModified: timestamp
		qcount: int
		questions: [
			{
				q: text
				a: [ List of Text ]
				answer: int
			} 
		]
	}
    """
    # fixme: questions containing answer
    quiz = models.TextField()  # stringified json

    # 나눔이 진행되는 중인가?
    isActive = models.BooleanField()

    # for id hashing.
    # url encryption.
    hashId = models.CharField(max_length=15)

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        self.hashId = hashids.encode(self.id)

    def __str__(self) -> str:
        return self.title


class Comment(models.Model):
    createdDate = models.DateTimeField(auto_now_add=True)
    modifiedDate = models.DateTimeField(auto_now=True)

    writer = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)

    isBonus = models.BooleanField()
    content = models.CharField(max_length=500)

    def __str__(self) -> str:
        return f'Comment:{self.writer}||{self.post}'


class Result(models.Model):
    viewer = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)

    quizSolved = models.DateTimeField(auto_now_add=True)

    # stringified json content
    # list of integers
    submissions = models.TextField()

    # 0 to 32767
    quizScore = models.PositiveSmallIntegerField()

    bonusComment = models.ForeignKey(Comment, on_delete=models.SET_NULL, null=True)
    bonusScore = models.PositiveSmallIntegerField()
    bonusScoreChecked = models.DateTimeField(auto_now=True)

    totalScore = models.PositiveSmallIntegerField()

    def __str__(self) -> str:
        return f'Result:{self.viewer}||{self.post}'
