import "./App.css";
import Student from "./pages/Student";
import Studentlist from "./pages/Studentlist";
import Course from "./pages/Course";
import Courselist from "./pages/Courselist";
import Results from "./pages/Results";
import ResultList from "./pages/ResultList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/layout";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/add-student" element={<Student />} />
          <Route path="/student-list" element={<Studentlist />} />
          <Route path="/add-courses" element={<Course />} />
          <Route path="/courses-list" element={<Courselist />} />
          <Route path="/add-result" element={<Results />} />
          <Route path="/result-list" element={<ResultList />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
