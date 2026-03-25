import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link to="/" className="logo-wrap" onClick={closeMenu}>
            <img
              src="/logo.png"
              alt="Superior Cleaning Solutions logo"
              className="site-logo"
            />
            <div className="logo-text-wrap">
              <span className="logo-title">Superior Cleaning Solutions</span>
              <span className="logo-tagline">
                We Dont Cut Corners, We Clean 'Em
              </span>
            </div>
          </Link>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            type="button"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <div className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
            <NavLink to="/" onClick={closeMenu}>
              Home
            </NavLink>
            <NavLink to="/services" onClick={closeMenu}>
              Services
            </NavLink>
            <NavLink to="/service-areas" onClick={closeMenu}>
              Service Areas
            </NavLink>
            <NavLink to="/faq" onClick={closeMenu}>
              FAQ
            </NavLink>
            <NavLink to="/about" onClick={closeMenu}>
              About
            </NavLink>
            <NavLink to="/contact" onClick={closeMenu}>
              Contact
            </NavLink>
            <Link to="/booking" className="btn btn-primary mobile-book-btn" onClick={closeMenu}>
              Book Now
            </Link>
          </div>

        </nav>
      </div>
    </header>
  );
}