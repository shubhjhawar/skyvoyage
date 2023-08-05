from django.urls import path
from .views import UserRegistrationView, AddFlightView, GetFlightsView, LoginView, GetFlightView, GetUserProfileView

urlpatterns = [
    path('signup', UserRegistrationView.as_view()),
    path('add-flight', AddFlightView.as_view()),
    path('get-flights', GetFlightsView.as_view()),
    path('login', LoginView.as_view()), 
    path('flights/<str:flight_id>', GetFlightView.as_view()), 
    path('profile/<int:user_id>', GetUserProfileView.as_view()), 
]