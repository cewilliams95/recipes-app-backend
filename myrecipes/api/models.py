from django.db import models

class Recipe(models.Model):
    body = models.TextField(null=True, blank=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)
    ingredients = models.JSONField(blank=True)
    directions = models.JSONField(blank=True)
    # image = models.ImageField()


    def __str__(self):
        return self.body[0:50]
