import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="eyebrow">Trusted Residential & Commercial Cleaning</span>
          <h1>We Dont Cut Corners, We Clean 'Em</h1>
          <p className="hero-subheadline">
            Superior Cleaning Solutions delivers dependable, detailed cleaning
            services for homes, apartments, offices, and move-in or move-out
            properties.
          </p>

          <div className="hero-points">
            <span>Reliable Scheduling</span>
            <span>Detail-Focused Cleaning</span>
            <span>Professional Service</span>
          </div>

          <div className="btn-group">
            <Link to="/contact" className="btn btn-primary">
              Book a Cleaning
            </Link>
            <a className="btn btn-secondary" href="tel:7623834983">
              Call 762-383-4983
            </a>
          </div>

          <div className="pill-row">
            <span className="pill">Residential Cleaning</span>
            <span className="pill">Commercial Cleaning</span>
            <span className="pill">Deep Cleaning</span>
            <span className="pill">Move-In / Move-Out</span>
          </div>
        </div>

        <div className="hero-brand-card">
          <img src={logo} alt="Superior Cleaning Solutions logo" className="hero-logo" />
          <h3>Superior Cleaning Solutions LLC</h3>
          <p>
            Professional cleaning with quality, consistency, and customer care
            at the center of every visit.
          </p>
          <ul>
            <li>Homes</li>
            <li>Offices</li>
            <li>Apartments</li>
            <li>Move-In / Move-Out Jobs</li>
          </ul>
        </div>
      </div>
    </section>
  );
}