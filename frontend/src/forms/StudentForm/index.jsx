import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addYears } from "date-fns";

export const StudentForm = (props) => {
  const getMinDate = () => {
    const currentDate = new Date();
    return addYears(currentDate, -10);
  };

  const { handleSubmit } = props;
  const [firstname, setfirstname] = useState("");
  const [familyname, setfamilyname] = useState("");
  const [email, setemail] = useState("");
  const [dateofbirth, setdateofbirth] = useState(addYears(new Date(), -10));

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(
      firstname,
      familyname,
      email,
      dateofbirth.toISOString().slice(0, 10)
    );
    resetForm();
  };

  const resetForm = () => {
    setfirstname("");
    setfamilyname("");
    setemail("");
    setdateofbirth("");
  };

  return (
    <div className="container">
      <form onSubmit={handleFormSubmit}>
        <div className="form-row">
          <div className="col">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              value={firstname}
              onChange={(e) => setfirstname(e.target.value)}
              placeholder="First name"
              required
            />
          </div>
          <div className="col">
            <label>Family name</label>
            <input
              type="text"
              className="form-control"
              value={familyname}
              onChange={(e) => setfamilyname(e.target.value)}
              placeholder="Family name"
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              placeholder="Enter email"
              required
            />
          </div>
          <div className="col">
            <label>Date of birth</label>
            <DatePicker
              className="form-control "
              selected={dateofbirth}
              onChange={(date) => setdateofbirth(date)}
              dateFormat="yyyy-MM-dd"
              maxDate={getMinDate()}
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
