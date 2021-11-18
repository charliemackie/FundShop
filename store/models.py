from django.db import models

# Create your models here.

class item(models.Model):

    name = models.TextField()
    price = models.IntegerField(default=0)
    size = models.TextField(default="L")
    image = models.ImageField(upload_to='images')