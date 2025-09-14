from django.apps import AppConfig
class QuizConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'quiz'

    def ready(self):
        from django.contrib import admin
        admin.site.site_header = "AlphaTechAcademy"
        admin.site.site_title = "AlphaTech Admin"
        admin.site.index_title = "Welcome to AlphaTechAcademy Admin"