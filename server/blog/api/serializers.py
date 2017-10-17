from blog.models import Post, Category
from django.contrib.auth.models import User
from rest_framework import serializers

post_detail_url = serializers.HyperlinkedIdentityField(
        view_name='posts-api:detail',
        # lookup_field='slug'
    )

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')

class PostSerializer(serializers.ModelSerializer):
    url = post_detail_url
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

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = (
            'id',
            'title',
            'slug'
        )