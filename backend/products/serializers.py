from rest_framework import serializers
from .models import Product


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'name_tr', 'description', 'description_tr',
                  'price', 'image', 'category', 'created_at']
