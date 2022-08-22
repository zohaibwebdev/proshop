from django.contrib import admin
from .models import *

# Register your models here.
@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('_id','name','price')

@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ['name']
@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ['user','createdAt']
@admin.register(OrderItem)
class OrderItemAdmin(admin.ModelAdmin):
    list_display = ['name', 'price']
@admin.register(ShippingAddress)
class ShippingAddressAdmin(admin.ModelAdmin):
    list_display = ['address']

