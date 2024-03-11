import React from "react";
import { useMutation } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import { showNotification } from "../components/users/notification";
import { resultData } from "../Apis/api";
import Resultsform from "../forms/Resultsform";

const Results = () => {
  const { mutate } = useMutation({
    mutationFn: resultData,
    onSuccess: () => {
      showNotification("success", "Result added successfully", 2000);
    },
    onError: (error) => {
      const message = `Result failed: ${
        error?.response?.data?.non_field_errors[0] ?? "Error Adding New Result"
      }`;
      showNotification("error", message, "Failed to add result", 5000);
      console.error("An error occurred:", error);
    },
  });

  const handleSubmit = (courses_data, student_data, student_score) => {
    const data = {
      courses: parseInt(courses_data),
      student: parseInt(student_data),
      student_score,
    };
    mutate(data);
  };
  return (
    <div>
      <ToastContainer />
      <Resultsform handleSubmit={handleSubmit} />
    </div>
  );
};

export default Results;
