from django.urls import path
from base.views import user_views as views

urlpatterns = [
    # path('', views.getRoutes, name='routes'),
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('register/', views.registerUser, name='register'),
    path('profile/', views.getUsersProfile, name='users.profile'),
    path('profile/update/', views.updateUsersProfile, name='users.profile-update'),
    path('', views.getUsers, name='users'),
    
]