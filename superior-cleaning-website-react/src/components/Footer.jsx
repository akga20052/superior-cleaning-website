import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">
            <img src="/logo.png" alt="Superior Cleaning Solutions logo" className="footer-logo" />
            <div>
              <h3>Superior Cleaning Solutions LLC</h3>
              <p className="footer-motto">We Dont Cut Corners, We Clean 'Em</p>
            </div>
          </div>

          <p>
            Professional residential and commercial cleaning services with
            dependable scheduling and detail-focused results.
          </p>

          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok">
              <FaTiktok />
            </a>
          </div>
        </div>

        <div>
          <h4>Quick Links</h4>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/service-areas">Service Areas</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/booking">Book Now</Link>
          </div>
        </div>

        <div>
          <h4>Legal</h4>
          <div className="footer-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© 2026 Superior Cleaning Solutions LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}