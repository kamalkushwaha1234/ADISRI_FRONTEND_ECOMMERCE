#Order serializer.py
from rest_framework import serializers
from .models import Shipping_Address,Order_Items,Order




class Shipping_Address_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Shipping_Address
        fields='__all__'

class Order_Item_Serializer(serializers.ModelSerializer):
    class Meta:
        model= Order_Items  
        fields = '__all__'

class Order_Serializer(serializers.ModelSerializer):
    order_Items = serializers.SerializerMethodField(read_only=True)
    shipping_address = serializers.SerializerMethodField(read_only=True)
    #user = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Order
        fields = '__all__'

    def get_order_Items(self,obj):
        items = obj.order_items_set.all()
        serializer = Order_Item_Serializer(items,many=True) 
        return serializer.data

    def get_shipping_address(self, obj):
        try:
            address = Shipping_Address_Serializer(obj.shipping_address, many=False).data
        except:
            address = None  # Handle the exception gracefully
        return address

    