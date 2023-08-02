from django.urls import path
from .views import UserRegistrationView, AddFlightView, GetFlightsView

urlpatterns = [
    path('signup', UserRegistrationView.as_view()),
    path('add-flight', AddFlightView.as_view()),
    path('get-flights', GetFlightsView.as_view()),
]