import React from "react";
import { Courseslists } from "../Apis/api";
import { CoursesDatadelete } from "../Apis/api";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const Courselist = () => {
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryFn: Courseslists,
  });
  const handleDelete = async (id) => {
    try {
      await CoursesDatadelete({ id });
      queryClient.invalidateQueries("Courses");
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };
  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Course Name</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={index}>
              <td>{item.courses_name}</td>
              <td>
                {" "}
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Courselist;
