import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000";

export const Studentlists = async (data) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/student/`);
    console.log("data = ", response.data.playload);
    return response.data.playload;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const studentData = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/student/`, data);

    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
export const StudentDatadelete = async (id) => {
  try {
    const idd = id.id;

    const response = await axios.delete(
      `${API_BASE_URL}/api/student/?id=${idd}`
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const Courseslists = async (data) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/courses/`);
    return response.data.playload;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
export const CoursesData = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/courses/`, data);

    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
export const CoursesDatadelete = async (id) => {
  try {
    const idd = id.id;

    const response = await axios.delete(
      `${API_BASE_URL}/api/courses/?id=${idd}`
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const ResultLists = async (data) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/result/`);
    console.log("data ?= ", response.data.data);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const resultData = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/result/`, data);

    return response.data;
  } catch (error) {
    console.log(
      error?.response?.data?.non_field_errors[0] ?? "Error Adding New Result"
    );
    console.error("Error fetching user data:", error);
    throw error;
  }
};
