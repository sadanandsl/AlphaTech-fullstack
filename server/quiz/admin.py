from django.contrib import admin
from .models import Category, SubCategory, Question, CustomUser,Event,CustomerAdmin
from .forms import CustomQuestionAdminForm
from django.contrib.auth.admin import UserAdmin


from django.contrib import admin
from .models import Category, SubCategory, Question

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name']

@admin.register(SubCategory)
class SubCategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'category_name']

    def category_name(self, obj):
        return obj.category.name if obj.category else None

    category_name.short_description = 'Category'
    category_name.admin_order_field = 'category__name'

@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ['text', 'subcategory', 'correct_option', 'options', 'explanation']

class CustomUserAdmin(UserAdmin):
    list_display = ('email', 'name')  
    ordering = ('email',) 

admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(Event)
