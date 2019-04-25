from django.shortcuts import render
from django.utils import timezone
from .models import Post
from .models import PostForm
from django.shortcuts import redirect

def post_list(request):
    posts = Post.objects.filter(created_date__lte=timezone.now()).order_by('-created_date')[:10:1]
    return render(request, 'blog/post_list.html', {'posts': posts})

def post_new(request):
    if request.method == "POST":
        posts = Post.objects.filter(created_date__lte=timezone.now()).order_by('-created_date')[:10:1]
        form = PostForm(request.POST)
        if form.is_valid():
            post = form.save(commit=False)
            post.save()
            return render(request, 'blog/post_list.html', {'posts': posts})
    else:
        form = PostForm()
    return render(request, 'blog/post_new.html', {'form': form})
