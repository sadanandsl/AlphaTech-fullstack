from django.urls import path
from .views import category_list, subcategory_list, question_list, subcategory_question_list,TestQuestions, CustomUserSignupView, CustomUserLoginView, EventListCreateAPIView

urlpatterns = [
    path('categories/', category_list, name='category-list'),
    path('categories/<int:category_id>/subcategories/', subcategory_list, name='subcategory-list'),
    path('subcategories/<int:subcategory_id>/questions/',subcategory_question_list,name='subcategory-question-list'),
    path('<int:subcategory_id>/questions/',subcategory_question_list,name='subcategory-question-list'),
    path('<int:subcategory_id>/questions/',subcategory_question_list,name='subcategory-question-list'),
    path('categories/<int:category_id>/subcategories/<int:subcategory_id>/questions/', subcategory_question_list,name='subcategory-question-list'),
    path('test-questions/', TestQuestions.as_view(), name='test-questions'),
    path('signup/', CustomUserSignupView.as_view(), name='custom-user-signup'),
    path('login/', CustomUserLoginView.as_view(), name='custom-user-login'),
    path('events/', EventListCreateAPIView.as_view(), name='event-list-create'),
]