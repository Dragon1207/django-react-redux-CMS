# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db.models import Q
from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import viewsets, generics, filters
from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated,
    IsAdminUser,
    IsAuthenticatedOrReadOnly,
)
from blog.models import Post, Category
from .serializers import UserSerializer, PostSerializer, CategorySerializer, CategoryPostSerializer

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer

class PostViewSet(generics.ListAPIView):
    """
    API endpoint that allows users to be viewed or edited.
    """
    serializer_class = PostSerializer
    filter_backends= [filters.SearchFilter, filters.OrderingFilter]
    permission_classes = [AllowAny]
    search_fields = ['title']
    ordering_fields = ('title')

    def get_queryset(self, *args, **kwargs):
        """
        GET request variable 'q' searches for post title
        """
        queryset_list = Post.objects.all()
        query = self.request.GET.get("q")
        if query:
            queryset_list = queryset_list.filter( Q(title__icontains=query) ).distinct()
        return queryset_list


class CategoryViewApi(generics.ListAPIView):
    """
    List Serialized Category Objects
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryDetailViewApi(generics.RetrieveAPIView):
    """
    List Serialized Category Objects
    """
    queryset = Category.objects.all()
    serializer_class = CategoryPostSerializer
    lookup_field = 'pk'

class CategoryPostViewApi(generics.ListAPIView):
    """
    List Serialized Category Objects
    """
    queryset = Category.objects.all()
    serializer_class = CategoryPostSerializer


class PostDetailAPIView(generics.RetrieveAPIView):
    """
    Get a Post by Primary Key
    """
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    lookup_field = 'pk'

class PostSlugAPIView(generics.RetrieveAPIView):
    """
    Get a Post by Slug
    """
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    lookup_field = 'slug'
