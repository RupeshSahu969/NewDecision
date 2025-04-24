import { Link } from 'react-router-dom';
import '../Style/style.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <Link to="/" className="navbar-brand">
            Decision Journal
          </Link>
          <div className="navbar-links">
            <Link to="/history" className="nav-link">
              History
            </Link>
            <Link to="/new" className="nav-button">
              New Decision
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;