from django.db import models
from django.utils import timezone
from django.forms import ModelForm
from django import forms


class Post(models.Model):
    nombre = models.CharField(max_length=200)
    created_date = models.DateTimeField(
            default=timezone.now)

    def publish(self):
        self.created_date = timezone.now()
        self.save()

    def __str__(self):
        return self.nombre

class PostForm(forms.ModelForm):

    class Meta:
        model = Post
        exclude = ()
