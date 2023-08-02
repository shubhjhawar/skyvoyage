from django.db import models
import string
import random

# Create your models here.

def generate_activation_code():                         #this function is used to generate a 6 letter code which is unique to all the new users
    return ''.join(random.choice(string.ascii_uppercase + string.digits) for x in range(6))

class UserModel(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    username = models.CharField(max_length=25, unique=True)
    email=models.EmailField()
    password = models.CharField(max_length=500)


class UserDetailModel(models.Model):
    user_info = models.ForeignKey(UserModel, on_delete=models.CASCADE)
    gender=models.CharField(max_length=10)
    phone_number=models.CharField(max_length=12)
    address1 = models.CharField(max_length=500)
    address2 = models.CharField(max_length=500)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    # date_joined = models.DateTimeField(default=None)


class FlightModel(models.Model):
    company = models.CharField(max_length=100)
    arrival = models.CharField(max_length=100)
    departure = models.CharField(max_length=100)
    price = models.IntegerField()
    distance = models.IntegerField()
    flight_id = models.CharField(max_length=6, default=generate_activation_code(), null=True)



