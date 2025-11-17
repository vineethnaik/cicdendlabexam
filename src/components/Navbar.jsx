import { Link } from "react-router-dom";
import "../App.css";

export default function Navbar() {
  const isLoggedIn = localStorage.getItem("token");

  return (
    <nav className="navbar">
      <h1>🏥 KLU Hospital</h1>
      <ul>
        {!isLoggedIn && (
          <>
            <li><Link to="/">Login</Link></li>
            <li><Link to="/signup">Register</Link></li>
          </>
        )}
        {isLoggedIn && (
          <>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><button onClick={() => { 
              localStorage.clear(); 
              const basePath = window.location.hostname.includes('github.io') 
                ? `/${window.location.pathname.split('/').filter(Boolean)[0] || 'cicdendlabexam'}` 
                : '';
              window.location.href = `${basePath}/`;
            }}>Logout</button></li>
          </>
        )}
      </ul>
    </nav>
  );
}
