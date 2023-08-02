from rest_framework import serializers
from .models import UserModel, UserDetailModel, FlightModel

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = '__all__'
    
    def validate(self, attrs):
        email = attrs.get('email', '')
        username = attrs.get('username', '')

        if UserModel.objects.filter(username=username).exists():
            print("username error")
            return serializers.ValidationError({"username":"username already exists"})
        if UserModel.objects.filter(email=email).exists():
            print("error email")
            return serializers.ValidationError({"email":"email already exists"})
        
        return super().validate(attrs)
    
class UserDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserDetailModel
        # fields = ["user_info","gender","address1","address2","city","phone_number","state","country","date_joined"]
        fields= '__all__'

    def validate(self, attrs):
        print(attrs)  # Add this line to see the data during validation
        return super().validate(attrs)
    
class FlightSerializer(serializers.ModelSerializer):
    class Meta:
        model = FlightModel
        fields = '__all__'
        