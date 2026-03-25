import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="container cta-box">
        <div>
          <h2>Ready for a cleaner home or business?</h2>
          <p>
            Contact Superior Cleaning Solutions today for a fast quote and
            dependable service you can trust.
          </p>
        </div>

        <div className="cta-actions">
          <Link to="/contact" className="btn btn-primary">
            Request a Quote
          </Link>
          <a href="tel:7623834983" className="btn btn-secondary">
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}