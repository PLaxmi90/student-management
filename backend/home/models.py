from django.db import models


class Student(models.Model):
    first_name = models.CharField(max_length=100)
    family_name = models.CharField(max_length=100)
    date_of_birth = models.DateField()
    email_address = models.EmailField(max_length=50, unique=True)


class Courses(models.Model):
    courses_name = models.CharField(max_length=100, unique=True)


class Result(models.Model):
    courses = models.ForeignKey("Courses", on_delete=models.CASCADE)
    student = models.ForeignKey("Student", on_delete=models.CASCADE)
    student_score = models.CharField(max_length=100)

    class Meta:
        unique_together = ("student", "courses")
