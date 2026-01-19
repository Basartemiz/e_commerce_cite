from django.core.management.base import BaseCommand
from products.models import Product


class Command(BaseCommand):
    help = 'Load sample products into the database'

    def handle(self, *args, **options):
        sample_products = [
            {
                'name': 'Wireless Bluetooth Headphones',
                'name_tr': 'Kablosuz Bluetooth Kulaklik',
                'description': 'Premium wireless headphones with active noise cancellation and 30-hour battery life.',
                'description_tr': 'Aktif gurultu engelleme ve 30 saat pil omru olan premium kablosuz kulaklik.',
                'price': 149.99,
                'image': 'https://picsum.photos/seed/headphones/300/300',
                'category': 'electronics',
            },
            {
                'name': 'Smart Fitness Watch',
                'name_tr': 'Akilli Fitness Saati',
                'description': 'Track your health metrics, workouts, and stay connected with this feature-packed smartwatch.',
                'description_tr': 'Saglik olcumlerinizi, antrenmanlarinizi takip edin ve bu ozelliklerle dolu akilli saatle bagli kalin.',
                'price': 199.99,
                'image': 'https://picsum.photos/seed/smartwatch/300/300',
                'category': 'electronics',
            },
            {
                'name': 'Professional Yoga Mat',
                'name_tr': 'Profesyonel Yoga Matı',
                'description': 'Extra thick, non-slip yoga mat perfect for all types of exercises and meditation.',
                'description_tr': 'Her turlu egzersiz ve meditasyon icin mukemmel, ekstra kalin, kaymaz yoga mati.',
                'price': 45.99,
                'image': 'https://picsum.photos/seed/yogamat/300/300',
                'category': 'sports',
            },
            {
                'name': 'Adjustable Dumbbell Set',
                'name_tr': 'Ayarlanabilir Dambıl Seti',
                'description': 'Space-saving adjustable dumbbells ranging from 5 to 50 lbs for complete home workouts.',
                'description_tr': 'Ev antrenmanlari icin 2.5 ile 22.5 kg arasinda ayarlanabilen, yer tasarruflu dambil seti.',
                'price': 299.99,
                'image': 'https://picsum.photos/seed/dumbbells/300/300',
                'category': 'sports',
            },
            {
                'name': 'Leather Laptop Bag',
                'name_tr': 'Deri Laptop Cantasi',
                'description': 'Elegant genuine leather laptop bag with multiple compartments for professionals.',
                'description_tr': 'Profesyoneller icin birden fazla bolmeli, zarif hakiki deri laptop cantasi.',
                'price': 89.99,
                'image': 'https://picsum.photos/seed/laptopbag/300/300',
                'category': 'accessories',
            },
            {
                'name': 'Minimalist Watch',
                'name_tr': 'Minimalist Kol Saati',
                'description': 'Classic minimalist design watch with genuine leather strap and Japanese movement.',
                'description_tr': 'Hakiki deri kayis ve Japon mekanizmali klasik minimalist tasarim saat.',
                'price': 129.99,
                'image': 'https://picsum.photos/seed/watch/300/300',
                'category': 'accessories',
            },
            {
                'name': 'Smart Home Speaker',
                'name_tr': 'Akilli Ev Hoparloru',
                'description': 'Voice-controlled smart speaker with premium sound quality and smart home integration.',
                'description_tr': 'Premium ses kalitesi ve akilli ev entegrasyonlu sesle kontrol edilen akilli hoparlor.',
                'price': 79.99,
                'image': 'https://picsum.photos/seed/speaker/300/300',
                'category': 'electronics',
            },
            {
                'name': 'Ceramic Plant Pot Set',
                'name_tr': 'Seramik Saksı Seti',
                'description': 'Set of 3 modern ceramic plant pots with drainage holes and bamboo trays.',
                'description_tr': 'Drenaj delikleri ve bambu tepsileri ile 3 adet modern seramik saksi seti.',
                'price': 34.99,
                'image': 'https://picsum.photos/seed/plantpot/300/300',
                'category': 'home',
            },
            {
                'name': 'Cozy Throw Blanket',
                'name_tr': 'Rahat Battaniye',
                'description': 'Ultra-soft microfiber throw blanket perfect for cozy nights on the couch.',
                'description_tr': 'Koltukta rahat geceler icin mukemmel, ultra yumusak mikrofiber battaniye.',
                'price': 29.99,
                'image': 'https://picsum.photos/seed/blanket/300/300',
                'category': 'home',
            },
            {
                'name': 'Running Shoes Pro',
                'name_tr': 'Profesyonel Kosus Ayakkabisi',
                'description': 'Lightweight running shoes with advanced cushioning technology for maximum comfort.',
                'description_tr': 'Maksimum konfor icin gelismis yastiklama teknolojisine sahip hafif kosus ayakkabisi.',
                'price': 119.99,
                'image': 'https://picsum.photos/seed/runningshoes/300/300',
                'category': 'sports',
            },
            {
                'name': 'Portable Power Bank',
                'name_tr': 'Tasinabilir Sarj Cihazi',
                'description': '20000mAh portable charger with fast charging support for all your devices.',
                'description_tr': 'Tum cihazlariniz icin hizli sarj destekli 20000mAh tasinabilir sarj cihazi.',
                'price': 49.99,
                'image': 'https://picsum.photos/seed/powerbank/300/300',
                'category': 'electronics',
            },
            {
                'name': 'Stainless Steel Water Bottle',
                'name_tr': 'Paslanmaz Celik Su Sisesi',
                'description': 'Double-walled insulated water bottle that keeps drinks cold for 24 hours or hot for 12 hours.',
                'description_tr': 'Icecekleri 24 saat soguk veya 12 saat sicak tutan cift duvarli yalitimli su sisesi.',
                'price': 24.99,
                'image': 'https://picsum.photos/seed/waterbottle/300/300',
                'category': 'sports',
            },
        ]

        created_count = 0
        for product_data in sample_products:
            product, created = Product.objects.get_or_create(
                name=product_data['name'],
                defaults=product_data
            )
            if created:
                created_count += 1
                self.stdout.write(f'Created: {product.name}')
            else:
                self.stdout.write(f'Already exists: {product.name}')

        self.stdout.write(
            self.style.SUCCESS(f'Successfully loaded {created_count} new products (total: {len(sample_products)})')
        )
