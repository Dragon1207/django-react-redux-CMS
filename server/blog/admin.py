# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib import admin
import models
from django.contrib import admin
from blog.models import Post, Category

class PostAdmin(admin.ModelAdmin):
    exclude = ('author',)
    list_display = ['title', 'description']
    list_filter = ['published', 'created', 'category']
    search_fields = ['title', 'description', 'content']
    date_hierarchy = 'created'
    save_on_top = True
    prepopulated_fields = {"slug": ("title",)}

class CategoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('title',)}

admin.site.register(models.Post, PostAdmin)
admin.site.register(models.Category, CategoryAdmin)
