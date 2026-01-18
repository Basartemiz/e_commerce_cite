import random
from django.core.management.base import BaseCommand
from products.models import Product


class Command(BaseCommand):
    help = 'Seeds the database with sample products'

    def handle(self, *args, **options):
        # Clear existing products
        Product.objects.all().delete()

        products_data = [
            {
                'name': 'Wireless Headphones',
                'name_tr': 'Kablosuz Kulaklik',
                'description': 'High-quality wireless headphones with noise cancellation.',
                'description_tr': 'Gurultu onleyici ozellikli yuksek kaliteli kablosuz kulaklik.',
                'price': 99.99,
                'image': 'https://picsum.photos/seed/headphones/300/300',
                'category': 'electronics',
            },
            {
                'name': 'Smart Watch',
                'name_tr': 'Akilli Saat',
                'description': 'Feature-rich smartwatch with health monitoring.',
                'description_tr': 'Saglik takibi yapabilen zengin ozellikli akilli saat.',
                'price': 199.99,
                'image': 'https://picsum.photos/seed/watch/300/300',
                'category': 'electronics',
            },
            {
                'name': 'Running Shoes',
                'name_tr': 'Kosu Ayakkabisi',
                'description': 'Comfortable running shoes for all terrains.',
                'description_tr': 'Her arazi icin uygun rahat kosu ayakkabisi.',
                'price': 79.99,
                'image': 'https://picsum.photos/seed/shoes/300/300',
                'category': 'sports',
            },
            {
                'name': 'Backpack',
                'name_tr': 'Sirt Cantasi',
                'description': 'Durable backpack with laptop compartment.',
                'description_tr': 'Laptop bolmeli dayanikli sirt cantasi.',
                'price': 49.99,
                'image': 'https://picsum.photos/seed/backpack/300/300',
                'category': 'accessories',
            },
            {
                'name': 'Coffee Maker',
                'name_tr': 'Kahve Makinesi',
                'description': 'Automatic coffee maker with programmable settings.',
                'description_tr': 'Programlanabilir ayarlara sahip otomatik kahve makinesi.',
                'price': 129.99,
                'image': 'https://picsum.photos/seed/coffee/300/300',
                'category': 'home',
            },
            {
                'name': 'Desk Lamp',
                'name_tr': 'Masa Lambasi',
                'description': 'LED desk lamp with adjustable brightness.',
                'description_tr': 'Ayarlanabilir parlaklikta LED masa lambasi.',
                'price': 34.99,
                'image': 'https://picsum.photos/seed/lamp/300/300',
                'category': 'home',
            },
            {
                'name': 'Yoga Mat',
                'name_tr': 'Yoga Mati',
                'description': 'Non-slip yoga mat for all fitness levels.',
                'description_tr': 'Tum seviyelere uygun kaymaz yoga mati.',
                'price': 29.99,
                'image': 'https://picsum.photos/seed/yoga/300/300',
                'category': 'sports',
            },
            {
                'name': 'Bluetooth Speaker',
                'name_tr': 'Bluetooth Hoparlor',
                'description': 'Portable Bluetooth speaker with deep bass.',
                'description_tr': 'Derin basli tasinabilir Bluetooth hoparlor.',
                'price': 59.99,
                'image': 'https://picsum.photos/seed/speaker/300/300',
                'category': 'electronics',
            },
            {
                'name': 'Fitness Tracker',
                'name_tr': 'Fitness Takip Bilekligi',
                'description': 'Track your daily activities and sleep patterns.',
                'description_tr': 'Gunluk aktivitelerinizi ve uyku duzeni takip edin.',
                'price': 49.99,
                'image': 'https://picsum.photos/seed/fitness/300/300',
                'category': 'electronics',
            },
            {
                'name': 'Water Bottle',
                'name_tr': 'Su Sisesi',
                'description': 'Insulated stainless steel water bottle.',
                'description_tr': 'Izoleli paslanmaz celik su sisesi.',
                'price': 24.99,
                'image': 'https://picsum.photos/seed/bottle/300/300',
                'category': 'sports',
            },
            {
                'name': 'Sunglasses',
                'name_tr': 'Gunes Gozlugu',
                'description': 'Stylish UV protection sunglasses.',
                'description_tr': 'Sik UV korumali gunes gozlugu.',
                'price': 89.99,
                'image': 'https://picsum.photos/seed/sunglasses/300/300',
                'category': 'accessories',
            },
            {
                'name': 'Throw Pillow',
                'name_tr': 'Dekoratif Yastik',
                'description': 'Soft decorative throw pillow for your couch.',
                'description_tr': 'Koltugunuz icin yumusak dekoratif yastik.',
                'price': 19.99,
                'image': 'https://picsum.photos/seed/pillow/300/300',
                'category': 'home',
            },
        ]

        for product_data in products_data:
            Product.objects.create(**product_data)

        self.stdout.write(
            self.style.SUCCESS(f'Successfully created {len(products_data)} products')
        )
