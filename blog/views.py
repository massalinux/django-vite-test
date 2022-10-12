from inertia import render

from .models import Post


def index(request):
    return render(request, 'Post', props={
        'posts': Post.objects.all()
    })


def prova(request):
    miao = request.GET.get('data')
    return render(request, 'Prova', props={'miao': miao})
