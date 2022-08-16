from django import forms

class InterestForm(forms.Form):
    business = forms.CharField(max_length=30, label="Business Name")
    owner = forms.CharField(max_length=30, label="Owner Name")
    email = forms.EmailField(max_length=30, label="Email For Contact")
    city = forms.CharField(max_length=30, label="City")
    current_site = forms.URLField(max_length=30, required=False, label="Current Site", initial="https://")
