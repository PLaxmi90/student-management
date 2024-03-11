# Student Management System

Welcome to the Student Management System! This project consists of frontend and backend folders, each serving a specific purpose in managing student-related data.

## Purpose

The Student Management System aims to provide a comprehensive solution for educational institutions to manage student information, courses, and results efficiently. It facilitates the creation, updating, and deletion of student records, course details, and result entries, streamlining administrative tasks for academic institutions.

## Overview

- **Frontend**: The frontend folder contains the user interface built with React.js. It allows users to interact with the system, view student details, add new students, courses, and results, and perform other administrative tasks.

- **Backend**: The backend folder hosts the Django REST Framework backend. It provides APIs for handling CRUD operations on student, course, and result entities. The backend ensures data integrity, enforces unique constraints, and integrates CORS middleware to handle cross-origin requests.

## Approach

### Frontend
The frontend is developed using React.js, providing a responsive and intuitive user interface for managing student-related data. The frontend communicates with the backend APIs to fetch and update data, ensuring seamless interaction between the user interface and the backend server.

### Backend
The backend is built with Django REST Framework, offering a robust API layer for handling CRUD operations on student, course, and result entities. It follows RESTful principles, enforcing data integrity and security measures. The backend integrates CORS middleware to handle cross-origin requests, enabling seamless communication with frontend applications.

## Getting Started

### Frontend
1. Navigate to the `frontend` folder.
2. Install dependencies using `yarn install`.
3. Run the application using `yarn start`.
4. Access the frontend application at `http://localhost:3000` in your browser.

### Backend
1. Navigate to the `backend` folder.
2. Install dependencies using `pip install -r requirements.txt`.
3. Run the backend server using `python manage.py runserver`.
4. Access the backend APIs at `http://localhost:8000/api/` in your browser.