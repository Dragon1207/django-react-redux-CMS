# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from blog.models import Post, Category

from django.test import TestCase

def test_create_post(id, title, body):
    post = Post()
    post.id = id
    post.title = title
    post.body = body

# Create your tests here.
class PostTest(TestCase):

    @classmethod
    def setUpTestData(cls):
        Post.objects.create(title='test')


    def setUp(self):
        print("setUp: Run once for every test method to setup clean data.")

    def test_title(self):
        post = Post.objects.get(id=1)
        title = post._meta.get_field('title').verbose_name
        self.assertEquals(title, 'test')

    def tearDown(self):
        #Clean up run after every test method.
        pass