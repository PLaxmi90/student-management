import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar" >
      <div className="container">
        <div className="logo">
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
            <NavLink to="/add-student">Add New Students</NavLink>
            </li>
            <li>
              <NavLink to="/student-list">Students List</NavLink>
            </li>
            <li>
              <NavLink to="/add-courses">Add New Courses</NavLink>
            </li>
            <li>
              <NavLink to="/courses-list">Courses List</NavLink>
            </li>
            <li>
              <NavLink to="/add-result">Add New Results</NavLink>
            </li>
            <li>
              <NavLink to="/result-list">Results List</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar