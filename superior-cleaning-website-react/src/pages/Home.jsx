import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import SectionHeader from "../components/SectionHeader";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="section">
        <div className="container">
          <SectionHeader
            title="Our Services"
            subtitle="Built for busy homeowners, property managers, and businesses that need quality cleaning they can count on."
          />

          <div className="grid services-grid">
            <div className="card">
              <h3>Residential Cleaning</h3>
              <p>Keep your home fresh, clean, and comfortable.</p>
              <ul>
                <li>Bedrooms, bathrooms, kitchens, and living areas</li>
                <li>Dusting, vacuuming, mopping, and trash removal</li>
                <li>Weekly, biweekly, or monthly options</li>
              </ul>
            </div>

            <div className="card">
              <h3>Commercial Cleaning</h3>
              <p>Professional cleaning for offices and business spaces.</p>
              <ul>
                <li>Restroom sanitizing</li>
                <li>Surface cleaning and floor care</li>
                <li>Reliable recurring service</li>
              </ul>
            </div>

            <div className="card">
              <h3>Deep Cleaning</h3>
              <p>Top-to-bottom cleaning for spaces needing extra attention.</p>
              <ul>
                <li>Great for first-time cleanings</li>
                <li>Focus on buildup and neglected areas</li>
                <li>Ideal for seasonal refreshes</li>
              </ul>
            </div>

            <div className="card">
              <h3>Move-In / Move-Out</h3>
              <p>Detailed cleaning for homes in transition.</p>
              <ul>
                <li>Great for renters, landlords, and agents</li>
                <li>Inside cabinets and appliances available</li>
                <li>Helps prepare properties quickly</li>
              </ul>
            </div>
          </div>

          <div className="section-button-wrap">
            <Link to="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <SectionHeader
            title="Simple Service Packages"
            subtitle="Starter packages to help clients understand pricing quickly. Final pricing may vary by home size, condition, and service frequency."
          />

          <div className="grid pricing-grid">
            <div className="card pricing-card">
              <h3>Basic Clean</h3>
              <div className="price">Starting at $120</div>
              <ul>
                <li>General surface cleaning</li>
                <li>Bathrooms sanitized</li>
                <li>Floors vacuumed and mopped</li>
              </ul>
            </div>

            <div className="card pricing-card featured-card">
              <span className="badge">Popular</span>
              <h3>Deep Clean</h3>
              <div className="price">Starting at $220</div>
              <ul>
                <li>Detailed room-by-room cleaning</li>
                <li>Extra attention to buildup</li>
                <li>Best for first-time or occasional service</li>
              </ul>
            </div>

            <div className="card pricing-card">
              <h3>Move Cleaning</h3>
              <div className="price">Starting at $250</div>
              <ul>
                <li>Move-in / move-out ready service</li>
                <li>Cabinets and wipe-downs</li>
                <li>Perfect for turnovers</li>
              </ul>
            </div>
          </div>

          <p className="mini center-text">
            Ask about recurring cleaning discounts for weekly or biweekly
            clients.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-preview-grid">
          <div>
            <h2 className="section-title left-align">Why Choose Us</h2>
            <ul className="list">
              <li>Dependable and professional communication</li>
              <li>Flexible scheduling for homes and businesses</li>
              <li>Attention to detail and customer satisfaction</li>
              <li>Clear service options and transparent pricing</li>
              <li>Focused on quality, trust, and repeat business</li>
            </ul>
          </div>

          <div className="card">
            <h3>About Superior Cleaning Solutions</h3>
            <p>
              We’re building a service-focused cleaning company designed to help
              clients feel proud of their homes and workplaces.
            </p>
            <p>
              Our mission is simple: deliver clean spaces, strong customer
              service, and a professional experience from booking to final
              walkthrough.
            </p>
            <Link to="/about" className="text-link">
              Learn more about us →
            </Link>
          </div>
        </div>
      </section>

      <section className="section alt-soft-section">
        <div className="container">
          <SectionHeader
            title="Payment Options"
            subtitle="Offer convenient payment methods so your customers can pay the way they prefer."
          />

          <div className="grid services-grid">
            <div className="card">
              <h3>Card Payments</h3>
              <p>
                Use Stripe as your main checkout for debit and credit card
                payments.
              </p>
              <a className="btn btn-primary" href="#">
                Pay with Card
              </a>
            </div>

            <div className="card">
              <h3>PayPal</h3>
              <p>
                Add PayPal as an additional option for customers who prefer it.
              </p>
              <a className="btn btn-primary" href="#">
                Pay with PayPal
              </a>
            </div>

            <div className="card">
              <h3>Zelle / Cash App</h3>
              <p>
                Manual payment options can also be listed for direct payments.
              </p>
              <p className="mini">
                Add your handle, phone number, or QR code here.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}