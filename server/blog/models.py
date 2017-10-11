from django.db import models
from django.db.models import permalink
from django.core.urlresolvers import reverse

# Create your models here.

class PostManager(models.Manager):
    def active(self, *args, **kwargs):
        return super(PostManager, self)

class Post(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(max_length=100, unique=True)
    description = models.CharField(max_length=255, blank=True)
    body = models.TextField()
    published = models.BooleanField(default=True)
    created = models.DateTimeField(db_index=True, auto_now_add=True)
    category = models.ForeignKey('blog.Category')

    objects = PostManager()

    def __unicode__(self):
        return '%s' % self.title

    def get_absolute_url(self):
        return reverse('blog.views.post', args=[self.slug])

class CategoryManager(models.Manager):
    def active(self, *args, **kwargs):
        return super(CategoryManager, self)

class Category(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100, db_index=True)
    slug = models.SlugField(max_length=100, db_index=True)

    objects = CategoryManager()

    def __unicode__(self):
        return '%s' % self.title

    def get_absolute_url(self):
        return reverse('blog.views.post', args=[self.slug])