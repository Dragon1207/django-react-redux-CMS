# from rest_framework import routers
from django.conf.urls import url
from django.contrib import admin
from blog.api.views import (
  PostViewSet,
  PostDetailAPIView,
  PostSlugAPIView,
  CategoryViewApi,
)

urlpatterns = [
    url(r'^posts/$', PostViewSet.as_view(), name='list'),
    url(r'^categories/$', CategoryViewApi.as_view(), name='categories'),
    url(r'^posts/slug/(?P<slug>[\w-]+)/$', PostSlugAPIView.as_view(), name='slug'),
    url(r'^posts/(?P<pk>\d+)/$', PostDetailAPIView.as_view(), name='detail'),
]
