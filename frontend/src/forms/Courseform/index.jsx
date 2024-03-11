import { useState } from "react";

export const Courseform = ({ handleSubmit }) => {
  const [coursename, setcoursename] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(coursename);
    setcoursename("");
    console.log(coursename);
  };

  return (
    <div className="container">
      <form onSubmit={handleFormSubmit}>
        <div className="form-row">
          <div className="col">
            <label>Course name</label>
            <input
              type="text"
              value={coursename}
              className="form-control"
              onChange={(e) => setcoursename(e.target.value)}
              placeholder="Course name"
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
