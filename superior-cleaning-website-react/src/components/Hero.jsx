import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="eyebrow">Trusted Cleaning Services</span>
          <h1>Professional Cleaning With Reliable Service You Can Trust</h1>
          <p>
            Superior Cleaning Solutions LLC provides dependable residential and
            commercial cleaning services with a professional touch. We help
            homes and businesses stay fresh, clean, and ready for what’s next.
          </p>

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
            <span className="pill">Move-In / Move-Out</span>
            <span className="pill">Deep Cleaning</span>
          </div>
        </div>

        <div className="hero-card">
          <h3>Why Clients Choose Us</h3>
          <ul>
            <li>Reliable scheduling</li>
            <li>Detail-focused cleaning</li>
            <li>Friendly and professional service</li>
            <li>Flexible options for homes and businesses</li>
          </ul>
        </div>
      </div>
    </section>
  );
}