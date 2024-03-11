import React from "react";
import { ResultLists } from "../Apis/api";
import { useQuery } from "@tanstack/react-query";

const ResultList = () => {
  const { data } = useQuery({
    queryFn: ResultLists,
  });

  console.log(data);

  return (
    <>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Course</th>
            <th scope="col">Student</th>
            <th scope="col">Score</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={index}>
              <td>{item?.courses?.courses_name}</td>
              <td>{`${item?.student?.first_name} ${item?.student?.family_name}`}</td>
              <td>{item?.student_score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ResultList;
