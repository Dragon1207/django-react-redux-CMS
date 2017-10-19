from blog.models import Post, Category
from django.contrib.auth.models import User
from rest_framework import serializers

from accounts.api.serializers import UserDetailSerializer
from comments.api.serializers import CommentSerializer
from comments.models import Comment

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
    image = serializers.SerializerMethodField()
    comments = serializers.SerializerMethodField()
    def get_image(self, instance):
        # returning image url if there is an image else blank string
        return instance.image.url if instance.image else ''
    def get_image(self, obj):
        try:
            image = obj.image.url
        except:
            image = None
        return image

    def get_comments(self, obj):
        c_qs = Comment.objects.filter_by_instance(obj)
        comments = CommentSerializer(c_qs, many=True).data
        return comments

    class Meta:
        model = Post
        fields = (
            'url',
            'id',
            'title',
            'slug',
            'image',
            'image_url',
            'description',
            'body',
            'published',
            'created',
            'category_obj',
            'comments'
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