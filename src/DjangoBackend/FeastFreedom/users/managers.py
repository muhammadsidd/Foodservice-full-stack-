from django.contrib.auth.models import UserManager

class KitchenUserManager(UserManager):
    def get_kitchen_users(self):
        return self.get_queryset().filter(is_staff=True)
    
    def get_regular_users(self):
        return self.get_queryset().filter(is_staff=False)