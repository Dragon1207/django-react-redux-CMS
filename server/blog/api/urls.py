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
    url(r'^$', PostViewSet.as_view(), name='list'),
    url(r'^categories/$', CategoryViewApi.as_view(), name='categories'),
    # url(r'^create/$', PostCreateAPIView.as_view(), name='create'),
    url(r'^slug/(?P<slug>[\w-]+)/$', PostSlugAPIView.as_view(), name='slug'),
    url(r'^(?P<pk>\d+)/$', PostDetailAPIView.as_view(), name='detail'),
    # url(r'^(?P<slug>[\w-]+)/edit/$', PostUpdateAPIView.as_view(), name='update'),
    # url(r'^(?P<slug>[\w-]+)/delete/$', PostDeleteAPIView.as_view(), name='delete'),
]

# router = routers.DefaultRouter()
# router.register(r'users', views.UserViewSet)
# router.register(r'posts', views.PostViewSet)
# router.register(r'categories', views.CategoryViewApi)
