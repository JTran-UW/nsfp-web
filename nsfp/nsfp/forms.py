from django import forms

attrs = {
    "class": "underline interest-input",
    "autocomplete": "off"
}

class InterestForm(forms.Form):
    business = forms.CharField(max_length=30, widget=forms.TextInput(attrs={**attrs, **{"placeholder": "Business Name"}}))
    owner = forms.CharField(max_length=30, widget=forms.TextInput(attrs={**attrs, **{"placeholder": "Owner Name"}}))
    email = forms.EmailField(max_length=30, widget=forms.EmailInput(attrs={**attrs, **{"placeholder": "Email For Contact"}}))
    city = forms.CharField(max_length=30, widget=forms.TextInput(attrs={**attrs, **{"placeholder": "City"}}))
    current_site = forms.URLField(max_length=30, required=False, widget=forms.TextInput(attrs={**attrs, **{"placeholder": "Current Site (If Applicable)"}}))
