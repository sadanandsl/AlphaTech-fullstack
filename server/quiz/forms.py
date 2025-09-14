from django import forms
from .models import Question
from django import forms
from .models import Question

class CustomQuestionAdminForm(forms.ModelForm):
    class Meta:
        model = Question
        fields = ['text', 'options', 'correct_option', 'subcategory', 'explanation']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        if self.instance:
            options = self.instance.options
            if options:
                options = options.split(',')
                for i in range(4):
                    field_name = f'option_{i + 1}'
                    initial_value = options[i] if i < len(options) else ''
                    self.fields[field_name] = forms.CharField(
                        max_length=255, required=True, label=f'Option {i + 1}', initial=initial_value)
                    # Debugging statement
                    print(f"Initialized field {field_name} with value: {initial_value}")

    def clean(self):
        cleaned_data = super().clean()
        # Debugging statement
        print("Cleaning form data:", cleaned_data)
        return cleaned_data