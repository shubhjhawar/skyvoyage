from django.shortcuts import render
from datetime import datetime
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import ValidationError 

from .models import UserModel, FlightModel
from .serializers import UserSerializer, UserDetailSerializer, FlightSerializer


# Create your views here.

class UserRegistrationView(APIView):
    serializer_class = UserSerializer

    def post(self, request):
        # print(request.data)
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            user_info = UserModel.objects.get(id=user.id)

             # Use the instance of UserModel instead of just the id
                # 'date_joined': datetime.now(),
                # **request.data

            user_detail_data = {
                'user_info': user_info.id, 
                'gender': request.data.get('gender', ''),
                'phone_number': request.data.get('phone_number', ''),
                'address1': request.data.get('address1', ''),
                'address2': request.data.get('address2', ''),
                'city': request.data.get('city', ''),
                'state': request.data.get('state', ''),
                'country': request.data.get('country', ''),
            }

            print(user_detail_data)

            # request.data["user_info_id"] = user.id
            # request.data["date_joined"] = datetime.now()

            user_data_serializer = UserDetailSerializer(data=user_detail_data)
            if user_data_serializer.is_valid():
                print("extra data validated")
                user_data_serializer.save(user_info=user_info)

            return Response(serializer.data, status=status.HTTP_201_CREATED)


        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AddFlightView(APIView):
    serializer_class = FlightSerializer

    def post(self, request):
        serializer = FlightSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({"error":"something went wrong"}, status=status.HTTP_400_BAD_REQUEST)
    

class GetFlightsView(APIView):
    serializer_class = FlightSerializer

    def post(self, request):
        arrival = request.data.get('arrival', '')
        departure = request.data.get('departure', '')

        
        if FlightModel.objects.filter(arrival=arrival, departure=departure).exists():
            flights = FlightModel.objects.filter(arrival=arrival, departure=departure)
            serialized_flights = FlightSerializer(flights, many=True).data
            return Response({"data": serialized_flights}, status=status.HTTP_200_OK)
        else:
            return Response({"data": ""}, status=status.HTTP_200_OK)
        
        return Response({"error":"something went wrong"}, status=status.HTTP_400_BAD_REQUEST)
        

