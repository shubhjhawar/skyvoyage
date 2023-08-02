# Generated by Django 4.2.3 on 2023-08-01 17:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('flights', '0003_alter_userdetailmodel_address1_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='FlightModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('company', models.CharField(max_length=100)),
                ('arrival', models.CharField(max_length=100)),
                ('departure', models.CharField(max_length=100)),
                ('price', models.IntegerField()),
                ('distance', models.IntegerField()),
            ],
        ),
    ]