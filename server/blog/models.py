from django.db import models
from django.db.models import permalink
from django.core.urlresolvers import reverse
from comments.models import Comment

# Create your models here.

class PostManager(models.Manager):
    def active(self, *args, **kwargs):
        return super(PostManager, self)

def upload_location(instance, filename):
    #filebase, extension = filename.split(".")
    #return "%s/%s.%s" %(instance.id, instance.id, extension)
    PostModel = instance.__class__
    """
    instance.__class__ gets the model Post. We must use this method because the model is defined below.
    Then create a queryset ordered by the "id"s of each object, 
    Then we get the last object in the queryset with `.last()`
    Which will give us the most recently created Model instance
    We add 1 to it, so we get what should be the same id as the the post we are creating.
    """
    return "static/images/posts/%s" % filename

class Post(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(max_length=100, unique=True)
    image = models.ImageField(upload_to=upload_location, 
            null=True, 
            blank=True, 
            width_field="width_field", 
            height_field="height_field")
    image_url = models.CharField(max_length=1000, null=True, blank=True)
    height_field = models.IntegerField(default=0)
    width_field = models.IntegerField(default=0)
    description = models.CharField(max_length=255, blank=True)
    body = models.TextField()
    published = models.BooleanField(default=True)
    created = models.DateTimeField(db_index=True, auto_now_add=True)
    category = models.ForeignKey('blog.Category')

    objects = PostManager()

    def __unicode__(self):
        return '%s' % self.title

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("blog.views.post", kwargs={"slug": self.slug})

    def get_api_url(self):
        return reverse("posts-api:detail", kwargs={"slug": self.slug})

    @property
    def comments(self):
        instance = self
        qs = Comment.objects.filter_by_instance(instance)
        return qs

class CategoryManager(models.Manager):
    def active(self, *args, **kwargs):
        return super(CategoryManager, self)

class Category(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100, db_index=True)
    slug = models.SlugField(max_length=100, db_index=True)

    class Meta:
        verbose_name_plural = "categories"

    objects = CategoryManager()

    def __unicode__(self):
        return '%s' % self.title

    def get_absolute_url(self):
        return reverse('blog.views.post', args=[self.slug])