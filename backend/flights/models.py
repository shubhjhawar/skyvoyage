from django.db import models

# Create your models here.

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

