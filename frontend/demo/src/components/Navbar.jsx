
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import CSS file

function Navbar() {

  const token = localStorage.getItem("token");
  
  return (
    <nav className="navbar">
      <h2 className="logo">MyApp</h2>
      <ul className="nav-links">
        <li><Link to="/" className="nav-item">Home</Link></li>
        {
          token ? (<div>
            <li><Link to="/login" className="nav-item" onClick={() => {
              localStorage.removeItem("token")
            }}>Logout</Link></li>
          </div>) : (<div>
            <li><Link to="/login" className="nav-item">Login</Link></li>
            <li><Link to="/signup" className="nav-item signup-btn">Signup</Link></li>
          </div>)
        }
      </ul>
    </nav>
  );
}

export default Navbar;
