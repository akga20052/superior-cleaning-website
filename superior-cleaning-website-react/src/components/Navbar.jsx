import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link to="/" className="logo-wrap">
            <img src="/logo.png" alt="Superior Cleaning Solutions logo" className="site-logo" />
            <div className="logo-text-wrap">
              <span className="logo-title">Superior Cleaning Solutions</span>
              <span className="logo-tagline">We Dont Cut Corners, We Clean 'Em</span>
            </div>
          </Link>

          <div className="nav-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/service-areas">Service Areas</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>

          <Link to="/booking" className="btn btn-primary nav-btn">
            Book Now
          </Link>
        </nav>
      </div>
    </header>
  );
}