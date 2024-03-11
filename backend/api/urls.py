from home.views import *
from django.urls import path


urlpatterns = [
    # path('index/',index),
    path('student/',StudentApis.as_view()),
    path('courses/',CoursesApis.as_view()),
    path('result/',ResultApis.as_view()),
    # path('userlogin/', TokenObtainPairView.as_view(), name='userlogin'),
    # path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    # path('register/',RegisterUser.as_view(),name='register'),
    # path('api-token-auth/', views.obtain_auth_token)
    # path('update/<id>',update_student)
    
]