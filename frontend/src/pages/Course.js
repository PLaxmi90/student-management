import React from "react";
import { useMutation } from "@tanstack/react-query";
import { Courseform } from "../forms/Courseform";
import { CoursesData } from "../Apis/api";
import { ToastContainer } from "react-toastify";
import { showNotification } from "../components/users/notification";
const Course = () => {
  const { mutate } = useMutation({
    mutationFn: CoursesData,
    onSuccess: () => {
      showNotification("success", "Course added successfully", "Course", 2000);
    },
    onError: (error) => {
      const message = ` failed: ${error?.response?.data?.detail}`;
      console.log(message);
      showNotification("error", message, "Failed to add Course", 5000);
      console.error("An error occurred:", error);
    },
  });

  const handleSubmit = (courses_name) => {
    const data = { courses_name };
    mutate(data);
  };

  return (
    <div>
      <ToastContainer />
      <Courseform handleSubmit={handleSubmit} />
    </div>
  );
};

export default Course;
