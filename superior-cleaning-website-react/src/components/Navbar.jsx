import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link to="/" className="logo">
            Superior Cleaning Solutions LLC
          </Link>

          <div className="nav-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>

          <Link to="/contact" className="btn btn-primary nav-btn">
            Get a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}