from django.shortcuts import render
from rest_framework.decorators import api_view
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from .models import Category, SubCategory, Question, CustomUser, Event
from .serializers import CategorySerializer, SubCategorySerializer, QuestionSerializer, CustomUserSignupSerializer,CustomUserLoginSerializer,EventSerializer
from rest_framework import status
from datetime import datetime
from django.utils import timezone
from django.db.models import F
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import CustomUserLoginSerializer


@api_view(['GET', 'POST'])
def category_list(request):
    if request.method == 'GET':
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def subcategory_list(request, category_id):
    subcategories = SubCategory.objects.filter(category_id=category_id)
    serializer = SubCategorySerializer(subcategories, many=True)
    return Response(serializer.data)

@api_view(['GET', 'POST'])
def question_list(request):
    if request.method == 'GET':
        questions = Question.objects.all()
        serializer = QuestionSerializer(questions, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = QuestionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET'])
def subcategory_question_list(request, category_id=None, subcategory_id=None):
    if category_id is not None:
        subcategory = get_object_or_404(SubCategory, category_id=category_id, id=subcategory_id)
        questions = Question.objects.filter(subcategory=subcategory)
    elif subcategory_id is not None:
        questions = Question.objects.filter(subcategory_id=subcategory_id)
    else:
        return Response({'error': 'Invalid request. Provide either category_id or subcategory_id.'}, status=400)

    serializer = QuestionSerializer(questions, many=True)
    return Response(serializer.data)

class TestQuestions(APIView):
    def get(self, request, format=None):
        aptitude_category = Category.objects.get(name='Aptitude')
        programming_category = Category.objects.get(name='Programming')
        # Filter questions by categories and types
        aptitude_questions = Question.objects.filter(subcategory__category=aptitude_category)
        programming_questions = Question.objects.filter(subcategory__category=programming_category) 
        questions = list(aptitude_questions) + list(programming_questions)
        serializer = QuestionSerializer(questions, many=True)
        return Response(serializer.data)

class CustomUserSignupView(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSignupSerializer

class CustomUserLoginView(APIView):
    def post(self, request):
        serializer = CustomUserLoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data['user']
            user_name = user.get_full_name() if user.get_full_name() else user.email
            return Response({'message': 'Login successful', 'user_name': user_name}, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class EventListCreateAPIView(generics.ListCreateAPIView):
    queryset = Event.objects.all()


#
# #
# @api_view(['GET'])
# def get_random_questions_for_test(request):
#     current_day = timezone.now().weekday()  # 0 is Monday, 6 is Sunday
#     if current_day != 5:  # Saturday is the 5th day of the week
#         return Response({'error': 'Tests are only available on Saturdays'}, status=400)
#     random_questions = Question.objects.all().order_by('?')[:60]
#     serializer = QuestionSerializer(random_questions, many=True)
#     return Response(serializer.data)
#
#
#
@api_view(['GET'])
def get_random_questions_for_test(request):
    current_day = 5
    random_questions = Question.objects.all().order_by('?')[:60]
    serializer = QuestionSerializer(random_questions, many=True)
    return Response(serializer.data)