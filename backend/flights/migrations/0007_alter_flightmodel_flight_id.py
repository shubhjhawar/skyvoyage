# Generated by Django 4.2.3 on 2023-08-04 22:03

from django.db import migrations, models
import flights.models


class Migration(migrations.Migration):

    dependencies = [
        ('flights', '0006_alter_flightmodel_flight_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='flightmodel',
            name='flight_id',
            field=models.CharField(default=flights.models.generate_activation_code, max_length=6, null=True),
        ),
    ]
