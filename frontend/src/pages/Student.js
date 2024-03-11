import React from "react";
import { StudentForm } from "../forms/StudentForm";
import { studentData } from "../Apis/api";
import { useMutation } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import { showNotification } from "../components/users/notification";

const Student = () => {
  const { mutate } = useMutation({
    mutationFn: studentData,
    onSuccess: () => {
      showNotification(
        "success",
        "Student added successfully",
        "Success",
        2000
      );
    },
    onError: (error) => {
      const message = `Login failed: ${error?.response?.data?.detail}`;
      console.log(message);
      showNotification("error", message, "Failed to add student", 5000);
      console.error("An error occurred:", error);
    },
  });

  const handleSubmit = (
    first_name,
    family_name,
    email_address,
    date_of_birth
  ) => {
    const data = { first_name, family_name, email_address, date_of_birth };
    mutate(data);
  };

  return (
    <div>
      <ToastContainer />
      <StudentForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default Student;
