from rest_framework import serializers
from .models import *
from datetime import datetime
from django.utils import timezone


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = "__all__"

        def validate_date_of_birth(self, value):
            try:
                date_of_birth = datetime.strptime(value, "%Y-%m-%d").date()
            except ValueError:
                raise serializers.ValidationError("Date of birth must be a valid date.")

            today = timezone.now().date()

            age = (
                today.year
                - date_of_birth.year
                - ((today.month, today.day) < (date_of_birth.month, date_of_birth.day))
            )
            if age < 10:

                raise serializers.ValidationError(
                    "Student must be at least 10 years old."
                )

            return value


class CoursesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Courses
        fields = "__all__"


class ResultSerializer(serializers.ModelSerializer):

    class Meta:
        model = Result
        fields = ["id", "student", "courses", "student_score"]
