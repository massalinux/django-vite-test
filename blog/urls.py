from django.urls import path

from .views import index, prova

urlpatterns = [
    path('', index, name='blog-index'),
    path('prova', prova, name='blog-prova')
]
