from django.db import models

# Create your models here.

class Track(models.Model):
    id = models.IntegerField(primary_key=True, default=1000)
    name = models.CharField(max_length=255)
    artist = models.CharField(max_length=255)