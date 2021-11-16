from django.shortcuts import render
from .models import item

def home(request):
    return render(request, 'store/home.html')

def login(request):
    return render(request, 'store/login.html')

def items(request):

    items = item.objects.all()

    context = {
        'items': items
    }

    return render(request, 'store/items.html', context)

def slider(request):
    
    context = {

    }

    total = 0

    if request.method == "POST":
        values = [v for v in request.POST.values() if v.isdigit()]
        ints = [float(v) for v in values]
        total = sum(ints)
        context = {
            "values": values,
            "total" : total
        }

    return render(request, 'store/slider.html', context)

def shipping(request):

    context = {

    }
    
    return render(request, 'store/shipping.html', context)
