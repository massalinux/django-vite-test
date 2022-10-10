from inertia import render

from .models import Post


def index(request):
    return render(request, 'Post', props={
        'posts': Post.objects.all()
    })
