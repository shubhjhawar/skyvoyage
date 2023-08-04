import string
import random
from .models import FlightModel

def generate_activation_code():                         #this function is used to generate a 6 letter code which is unique to all the new users
    length = 6
    while True:
        code = ''.join(random.choices(string.ascii_uppercase, k=length))
        if FlightModel.objects.filter(code = code).count() == 0:
            break
    return code