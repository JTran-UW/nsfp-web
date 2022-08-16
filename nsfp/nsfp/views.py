from django.shortcuts import render, redirect
from .forms import InterestForm
from django.core.mail import send_mail

# Write my views here

def home(request):
    return render(request, "index.html")

def interest(request):
    if request.method == "POST":
        form = InterestForm(request.POST)
        if form.is_valid():
            cd = form.cleaned_data
            send_mail(
                f"{cd.get('business')} has submitted an application",
                f"""Businesss: {cd.get('business')} \n
                Owner: {cd.get('owner')} \n
                Email: {cd.get('email')} \n
                City: {cd.get('city')} \n
                Current Site: {cd.get('current_site', "N/A")}
                """,
                "hello@newstorefront.dev",
                ["profjat@uw.edu", "hello@newstorefront.dev"],
                fail_silently=False
            )

    form = InterestForm()
    return render(request, "interest.html", {"form": form})
