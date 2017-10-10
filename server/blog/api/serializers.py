from blog.models import Post, Category
from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')

class PostSerializer(serializers.Serializer):
    id = serializers.PrimaryKeyRelatedField(read_only=True)
    title = serializers.CharField(max_length=100)
    slug = serializers.SlugField(max_length=100)
    description = serializers.CharField(max_length=255)
    body = serializers.CharField(max_length=1000)
    published = serializers.BooleanField(default=True)
    created = serializers.DateTimeField()
    category = serializers.StringRelatedField()
    class Meta:
        model = Post
        fields = (
            'id',
            'title',
            'slug',
            'description',
            'body',
            'published',
            'created',
            'category'
        )

class CategorySerializer(serializers.Serializer):
    id = serializers.PrimaryKeyRelatedField(read_only=True)
    title = serializers.CharField(max_length=100)
    slug = serializers.SlugField(max_length=100)
    class Meta:
        model = Category
        fields = (
            'id',
            'title',
            'slug'
        )