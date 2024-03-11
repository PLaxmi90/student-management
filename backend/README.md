# Student Management System Backend

Welcome to the Student Management System backend! This backend is built using Django Rest Framework and provides APIs for managing student, course, and result data.

## Purpose

The purpose of this backend is to provide a robust and efficient solution for managing student-related data in educational institutions. It aims to streamline the process of adding, updating, and deleting student, course, and result records.

## Approach

The backend follows a RESTful architecture and leverages Django's powerful features for data modeling and API development. It utilizes Django REST Framework for building RESTful APIs with ease. The backend ensures data integrity by enforcing unique constraints and provides endpoints for CRUD operations on student, course, and result entities. Additionally, CORS middleware is integrated to handle cross-origin requests, and the backend is configured to run on port 8000 for easy integration with frontend applications.

## Table Structure

The database consists of the following tables:

1. **Student**:
    - `first_name`: First name of the student (max length: 100 characters).
    - `family_name`: Family name of the student (max length: 100 characters).
    - `date_of_birth`: Date of birth of the student.
    - `email_address`: Email address of the student (max length: 50 characters, unique).

2. **Courses**:
    - `courses_name`: Name of the course (max length: 100 characters, unique).

3. **Result**:
    - `courses`: Foreign key to the `Courses` table, indicating the course associated with the result.
    - `student`: Foreign key to the `Student` table, indicating the student associated with the result.
    - `student_score`: Score obtained by the student in the course (max length: 100 characters).
    - Unique constraint on the combination of `student` and `courses`.


## APIs

The backend provides the following APIs for CRUD operations:

1. `/api/students/`: 
    - `GET`: Retrieve all students.
    - `POST`: Create a new student. Payload should include all student fields in the request body.
    - `DELETE`: Delete a student with given id.

2. `/api/courses/`: 
    - `GET`: Retrieve all courses.
    - `POST`: Create a new course. Payload should include all course fields in the request body.
    - `DELETE`: Delete a course with given id.

3. `/api/results/`: 
    - `GET`: Retrieve all results.
    - `POST`: Create a new result. Payload should include all result fields in the request body.
    - `DELETE`: Delete a result with given id.

## Installation

To get started with the backend, follow these steps:

1. Clone the repository to your local machine:

```bash
git clone <repository-url>
```

2. Navigate to the project directory:

```bash
cd student-management-system-backend
```

3. Install dependencies using pip:

```bash
pip install -r requirements.txt
```

## Configuration
Before running the backend, make sure to configure the following settings:

### Database Configuration:

- The backend uses SQLite as the default database. No additional configuration is required.

### CORS Configuration:

- Cross-Origin Resource Sharing (CORS) is configured to allow requests from the frontend application running on port 3000. Make sure to update the CORS settings if the frontend application is running on a different port.

## Usage
Once you have installed the dependencies and configured the settings, you can start the development server by running:

```bash
python manage.py runserver
```

This command will start the backend server and make it accessible at http://localhost:8000/