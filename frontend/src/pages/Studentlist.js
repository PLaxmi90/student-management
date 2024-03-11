import React from "react";
import { Studentlists } from "../Apis/api";
import { StudentDatadelete } from "../Apis/api";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const Studentlist = () => {
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryFn: Studentlists,
  });

  const handleDelete = async (id) => {
    try {
      await StudentDatadelete({ id });
      queryClient.invalidateQueries("students");
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  return (
    <>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Name & Family name</th>
            <th scope="col">DOB</th>
            <th scope="col">Email</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={index}>
              <td>{item.first_name + " " + item.family_name}</td>
              <td>{item.date_of_birth}</td>
              <td>{item.email_address}</td>
              <td>
                {" "}
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Studentlist;
