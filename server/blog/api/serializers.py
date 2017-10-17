from blog.models import Post, Category
from django.contrib.auth.models import User
from rest_framework import serializers

post_detail_url = serializers.HyperlinkedIdentityField(
        view_name='posts-api:detail',
        lookup_field='pk'
    )

post_slug_url = serializers.HyperlinkedIdentityField(
        view_name='posts-api:slug',
        lookup_field='slug'
    )

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = (
            'id',
            'title',
            'slug'
        )

class PostSerializer(serializers.ModelSerializer):
    url = post_detail_url
    category_obj = CategorySerializer(source='category')

    class Meta:
        model = Post
        fields = (
            'url',
            'id',
            'title',
            'slug',
            'description',
            'body',
            'published',
            'created',
            'category_obj'
        )

class PostSlugSerializer(serializers.ModelSerializer):
    url = post_slug_url
    class Meta:
        model = Post
        fields = (
            'url',
            'id',
            'title',
            'slug',
            'description',
            'body',
            'published',
            'created',
            'category'
        )