from django.shortcuts import render

# Write my views here

def home(request):
    return render(request, "index.html")
