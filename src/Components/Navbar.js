import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
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
    </nav>
  );
};

export default Navbar;