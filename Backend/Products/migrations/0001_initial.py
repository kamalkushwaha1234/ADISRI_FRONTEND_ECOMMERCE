# Generated by Django 5.0.6 on 2024-07-01 05:52

import Products.models
import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('Product_Id', models.AutoField(primary_key=True, serialize=False)),
                ('Name', models.CharField(max_length=200)),
                ('Class', models.CharField(blank=True, max_length=20, null=True)),
                ('Price', models.IntegerField()),
                ('Image', models.ImageField(upload_to=Products.models.product_image_upload_path)),
                ('createdAt', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Description', models.TextField(blank=True, null=True)),
                ('Page', models.IntegerField(blank=True, null=True)),
                ('Price', models.IntegerField(default=0)),
                ('Name', models.CharField(max_length=200)),
                ('Subject', models.CharField(max_length=20)),
                ('Class', models.CharField(max_length=20)),
                ('Author', models.CharField(blank=True, max_length=100, null=True)),
                ('Publication', models.CharField(max_length=100)),
                ('Isbn', models.CharField(blank=True, max_length=20, null=True)),
                ('Cover_Image', models.ImageField(upload_to=Products.models.book_image_upload_path)),
                ('Back_Image', models.ImageField(upload_to=Products.models.book_image_upload_path)),
                ('Index_Image', models.ImageField(upload_to=Products.models.book_image_upload_path)),
                ('Page1_Image', models.ImageField(upload_to=Products.models.book_image_upload_path)),
                ('Page2_Image', models.ImageField(upload_to=Products.models.book_image_upload_path)),
                ('Page3_Image', models.ImageField(upload_to=Products.models.book_image_upload_path)),
                ('Create_At', models.DateTimeField(auto_now_add=True)),
                ('Book_Id', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='book_detail', to='Products.product')),
            ],
        ),
    ]