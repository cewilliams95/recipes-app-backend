# Generated by Django 5.0.2 on 2024-09-07 17:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_recipe_title'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recipe',
            name='title',
            field=models.TextField(blank=True, null=True),
        ),
    ]
