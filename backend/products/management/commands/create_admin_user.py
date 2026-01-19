from django.core.management.base import BaseCommand
from django.contrib.auth.models import User


class Command(BaseCommand):
    help = 'Create admin user for the store'

    def add_arguments(self, parser):
        parser.add_argument(
            '--username',
            default='admin',
            help='Admin username (default: admin)'
        )
        parser.add_argument(
            '--password',
            default='shopease2024',
            help='Admin password (default: shopease2024)'
        )
        parser.add_argument(
            '--email',
            default='admin@shopease.com',
            help='Admin email (default: admin@shopease.com)'
        )

    def handle(self, *args, **options):
        username = options['username']
        password = options['password']
        email = options['email']

        if User.objects.filter(username=username).exists():
            user = User.objects.get(username=username)
            user.set_password(password)
            user.is_staff = True
            user.is_superuser = True
            user.save()
            self.stdout.write(
                self.style.WARNING(f'Admin user "{username}" already exists. Password updated.')
            )
        else:
            User.objects.create_superuser(
                username=username,
                email=email,
                password=password
            )
            self.stdout.write(
                self.style.SUCCESS(f'Admin user "{username}" created successfully.')
            )

        self.stdout.write(f'\nCredentials:')
        self.stdout.write(f'  Username: {username}')
        self.stdout.write(f'  Password: {password}')
