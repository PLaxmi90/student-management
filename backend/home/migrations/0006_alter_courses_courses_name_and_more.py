# Generated by Django 5.0.3 on 2024-03-10 09:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("home", "0005_remove_result_courses_name_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="courses",
            name="courses_name",
            field=models.CharField(max_length=100, unique=True),
        ),
        migrations.AlterField(
            model_name="student",
            name="email_address",
            field=models.EmailField(max_length=50, unique=True),
        ),
    ]
