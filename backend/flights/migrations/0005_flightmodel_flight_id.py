# Generated by Django 4.2.3 on 2023-08-02 04:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('flights', '0004_flightmodel'),
    ]

    operations = [
        migrations.AddField(
            model_name='flightmodel',
            name='flight_id',
            field=models.CharField(default='VG9N48', max_length=6, null=True),
        ),
    ]
