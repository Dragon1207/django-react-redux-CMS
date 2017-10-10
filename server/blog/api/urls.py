from rest_framework import routers
from blog.api import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'posts', views.PostViewSet)
router.register(r'categories', views.CategoryViewApi)
