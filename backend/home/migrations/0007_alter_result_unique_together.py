# Generated by Django 5.0.3 on 2024-03-10 10:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("home", "0006_alter_courses_courses_name_and_more"),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name="result",
            unique_together={("student", "courses")},
        ),
    ]