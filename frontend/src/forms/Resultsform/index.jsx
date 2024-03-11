// import React, { useState } from "react";
// import { Studentlists } from "../../Apis/api";
// import { Courseslists } from "../../Apis/api";
// import { useQuery } from "@tanstack/react-query";

// const Resultsform = ({ handleSubmit }) => {
//   const [courseData, setcourseData] = useState({});
//   const [studentData, setstudentData] = useState({});
//   const [rank, setrank] = useState("");

//   const { data: studentsData } = useQuery({
//     queryKey: "students",
//     queryFn: Studentlists,
//   });

//   const { data: coursesData } = useQuery({
//     queryKey: "courses",
//     queryFn: Courseslists,
//   });

//   const resetForm = () => {
//     setcourseData("");
//     setstudentData("");
//     setrank("");
//   }

//   return (
//     <div className="container">
//       <form
//         onSubmit={(event) => {
//           event.preventDefault();
//           handleSubmit(courseData, studentData, rank);
//           resetForm();
//         }}
//       >
//         <div className="form-row">
//           <div className="col">
//             <select
//               className="form-control"
//               value={courseData}
//               onChange={(event) => setcourseData(event.target.value)}
//             >
//               <option value="">Select a course</option>
//               {coursesData &&
//                 coursesData.map((option) => (
//                   <option key={option.id} value={option.id}>
//                     {option.courses_name}
//                   </option>
//                 ))}
//             </select>
//           </div>
//           <div className="col">
//             <select
//               className="form-control"
//               value={studentData}
//               onChange={(event) => setstudentData(event.target.value)}
//             >
//               <option value="">Select a student</option>
//               {studentsData &&
//                 studentsData.map((option) => (
//                   <option
//                     key={option.id}
//                     value={option.id}
//                   >
//                     {option.first_name + " " + option.family_name}
//                   </option>
//                 ))}
//             </select>
//           </div>
//           <div className="col">
//             <select
//               className="form-control"
//               value={rank}
//               onChange={(event) => setrank(event.target.value)}
//             >
//               <option value="">Select a rank</option>
//               <option value="A">A</option>
//               <option value="B">B</option>
//               <option value="C">C</option>
//               <option value="D">D</option>
//               <option value="E">E</option>
//               <option value="F">F</option>
//             </select>
//           </div>
//         </div>
//         <button type="submit" className="btn btn-primary mt-3">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Resultsform;

import React, { useState } from "react";
import { Studentlists, Courseslists } from "../../Apis/api";
import { useQuery } from "@tanstack/react-query";

const Resultsform = ({ handleSubmit }) => {
  const [formData, setFormData] = useState({
    courseData: "",
    studentData: "",
    rank: "",
  });

  const { data: studentsData } = useQuery({
    queryKey: "students",
    queryFn: Studentlists,
  });

  const { data: coursesData } = useQuery({
    queryKey: "courses",
    queryFn: Courseslists,
  });

  const resetForm = () => {
    setFormData({
      courseData: "",
      studentData: "",
      rank: "",
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSubmit(formData.courseData, formData.studentData, formData.rank);
    resetForm();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleFormSubmit}>
        <div className="form-row">
          <div className="col">
            <select
              className="form-control"
              name="courseData"
              value={formData.courseData}
              onChange={handleInputChange}
            >
              <option value="">Select a course</option>
              {coursesData &&
                coursesData.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.courses_name}
                  </option>
                ))}
            </select>
          </div>
          <div className="col">
            <select
              className="form-control"
              name="studentData"
              value={formData.studentData}
              onChange={handleInputChange}
            >
              <option value="">Select a student</option>
              {studentsData &&
                studentsData.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.first_name + " " + option.family_name}
                  </option>
                ))}
            </select>
          </div>
          <div className="col">
            <select
              className="form-control"
              name="rank"
              value={formData.rank}
              onChange={handleInputChange}
            >
              <option value="">Select a rank</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
            </select>
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Resultsform;
