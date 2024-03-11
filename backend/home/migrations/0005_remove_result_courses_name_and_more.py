# Generated by Django 5.0.3 on 2024-03-10 08:14

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("home", "0004_result"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="result",
            name="courses_name",
        ),
        migrations.RemoveField(
            model_name="result",
            name="student_name",
        ),
        migrations.AddField(
            model_name="result",
            name="courses",
            field=models.ForeignKey(
                default=18,
                on_delete=django.db.models.deletion.CASCADE,
                to="home.courses",
            ),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="result",
            name="student",
            field=models.ForeignKey(
                default=31,
                on_delete=django.db.models.deletion.CASCADE,
                to="home.student",
            ),
            preserve_default=False,
        ),
    ]
