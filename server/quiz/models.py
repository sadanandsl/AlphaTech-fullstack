from django.db import models
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, Permission, Group
from .managers import CustomUserManager

class CustomUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)
    name = models.CharField(max_length=150, default='Some Default Name') 
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    groups = models.ManyToManyField(Group, related_name='customuser_set', blank=True)
    user_permissions = models.ManyToManyField(Permission, related_name='customuser_set', blank=True)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'

    def __str__(self):
        return self.email

    def get_full_name(self):
        return self.name

#this creates the model for the b2b in db
class  CustomerAdmin(models.Model,AbstractBaseUser,Permission):
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)
    pass
class Category(models.Model):
    name = models.CharField(max_length=255)
    def __str__(self):
        return self.name

class SubCategory(models.Model):
    name = models.CharField(max_length=255)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class Question(models.Model):
    text = models.TextField()
    options = models.JSONField()
    correct_option = models.IntegerField()
    subcategory = models.ForeignKey(SubCategory, on_delete=models.CASCADE)
    explanation = models.TextField(default='Default explanation')
    def __str__(self):
        return self.text

class Event(models.Model):
    image = models.ImageField(upload_to='images/')
    title = models.CharField(max_length=255)
    description = models.TextField()
    link = models.URLField()

    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)

    def __str__(self):
        return self.title