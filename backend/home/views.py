from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import *
from .serializers import *
from rest_framework.permissions import AllowAny


class StudentApis(APIView):

    def get(self, request):

        data = Student.objects.all()
        serializers = StudentSerializer(data, many=True)
        return Response({"playload": serializers.data})

    def post(self, request):

        serializer = StudentSerializer(data=request.data)

        if serializer.is_valid():
            date_of_birth = serializer.validated_data.get("date_of_birth")
            today = timezone.now().date()
            age = (
                today.year
                - date_of_birth.year
                - ((today.month, today.day) < (date_of_birth.month, date_of_birth.day))
            )
            if age < 10:
                return Response(
                    {"status": 400, "message": "Student must be at least 10 years old."}
                )
            serializer.save()
            return Response({"status": 200, "message": "Student created successfully"})
        else:
            return Response({"status": 400, "message": serializer.errors})

    def delete(self, request):
        try:

            id = request.GET.get("id")
            student_obj = Student.objects.get(id=id)

            student_obj.delete()
            return Response({"status": 200, "message": "Student Deleted successfully"})
        except Exception as e:
            return Response({"status": 403, "message": e})


class CoursesApis(APIView):

    def get(self, request):
        data = Courses.objects.all()
        serializers = CoursesSerializer(data, many=True)
        return Response({"playload": serializers.data})

    def post(self, request):
        serializer = CoursesSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response({"status": 200, "message": "Courses created successfully"})
        else:
            return Response({"status": 400, "message": serializer.errors})

    def delete(self, request):
        try:
            id = request.GET.get("id")
            Courses_obj = Courses.objects.get(id=id)

            Courses_obj.delete()
            return Response({"status": 200, "message": "Courses Deleted successfully"})
        except Exception as e:
            print(e)
            return Response({"status": 403, "message": e})


class ResultApis(APIView):

    def get(self, request):
        data = Result.objects.all()

        serialized_data = []
        for result in data:
            single_data = {
                "student": StudentSerializer(result.student).data,
                "courses": CoursesSerializer(result.courses).data,
                "student_score": result.student_score,
            }
            serialized_data.append(single_data)

        return Response({"data": serialized_data})

    def post(self, request):
        course_id = request.data.get("courses")
        student_id = request.data.get("student")
        student_score = request.data.get("student_score")

        data = {
            "student": student_id,
            "courses": course_id,
            "student_score": student_score,
        }

        serializer = ResultSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

    def delete(self, request):
        try:
            id = request.GET.get("id")
            Courses_obj = Result.objects.get(id=id)
            Courses_obj.delete()

            return Response({"status": 200, "message": "Result Deleted successfully"})
        except Exception as e:
            print(e)
            return Response({"status": 403, "message": e})
