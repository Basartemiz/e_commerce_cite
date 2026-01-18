from django.db import models


class Product(models.Model):
    CATEGORY_CHOICES = [
        ('electronics', 'Electronics'),
        ('sports', 'Sports'),
        ('accessories', 'Accessories'),
        ('home', 'Home'),
    ]

    name = models.CharField(max_length=200)
    name_tr = models.CharField(max_length=200, blank=True)
    description = models.TextField()
    description_tr = models.TextField(blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.URLField()
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.name
