from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Subscriber
from .serializers import SubscriberSerializer

class SubscribeView(generics.CreateAPIView):
    queryset = Subscriber.objects.all()
    serializer_class = SubscriberSerializer
