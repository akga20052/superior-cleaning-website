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
            subtitle="Cleaning solutions built for busy homeowners, landlords, renters, and businesses that want dependable quality."
          />

          <div className="grid services-grid">
            <div className="card">
              <h3>Residential Cleaning</h3>
              <p>Keep your home fresh, clean, and comfortable.</p>
              <ul>
                <li>Kitchens, bathrooms, bedrooms, and living spaces</li>
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
              <p>Top-to-bottom cleaning for spaces that need extra attention.</p>
              <ul>
                <li>Great for first-time cleanings</li>
                <li>Focus on buildup and neglected areas</li>
                <li>Ideal for seasonal refreshes</li>
              </ul>
            </div>

            <div className="card">
              <h3>Move-In / Move-Out</h3>
              <p>Detailed cleaning for properties in transition.</p>
              <ul>
                <li>Great for renters, landlords, and property managers</li>
                <li>Inside cabinets and appliances available</li>
                <li>Helps prepare spaces quickly</li>
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
            title="Why People Choose Us"
            subtitle="We focus on consistency, communication, and detailed cleaning that leaves spaces looking their best."
          />

          <div className="grid services-grid">
            <div className="card icon-card">
              <h3>Reliable</h3>
              <p>Dependable scheduling and professional communication.</p>
            </div>

            <div className="card icon-card">
              <h3>Detailed</h3>
              <p>We pay attention to the areas others often miss.</p>
            </div>

            <div className="card icon-card">
              <h3>Flexible</h3>
              <p>Cleaning options for homes, offices, and special situations.</p>
            </div>

            <div className="card icon-card">
              <h3>Customer Focused</h3>
              <p>Our goal is to make every client feel taken care of.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            title="Simple Service Packages"
            subtitle="Clear starter pricing that can be adjusted by square footage, condition, and frequency."
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
              <span className="badge">Most Popular</span>
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
            Ask about recurring cleaning discounts for weekly or biweekly clients.
          </p>
        </div>
      </section>

      <section className="section alt-soft-section">
        <div className="container">
          <SectionHeader
            title="Service Areas"
            subtitle="Serving clients across South Carolina and Georgia service areas."
          />

          <div className="grid service-area-grid">
            <div className="card"><h3>Homes</h3><p>Routine and one-time home cleaning.</p></div>
            <div className="card"><h3>Apartments</h3><p>Move-out and recurring apartment cleanings.</p></div>
            <div className="card"><h3>Offices</h3><p>Clean, professional spaces for your team and customers.</p></div>
            <div className="card"><h3>Rental Properties</h3><p>Turnover cleaning for property managers and landlords.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            title="What Clients Love"
            subtitle="Add your real Google or Facebook reviews here later. For now, these are sample review sections."
          />

          <div className="grid testimonials-grid">
            <div className="card testimonial-card">
              <p>
                “Very professional, on time, and the house looked amazing when they finished.”
              </p>
              <strong>- Happy Client</strong>
            </div>

            <div className="card testimonial-card">
              <p>
                “They did a great deep clean and paid attention to the details that matter.”
              </p>
              <strong>- Returning Customer</strong>
            </div>

            <div className="card testimonial-card">
              <p>
                “Excellent communication and dependable service. I would definitely book again.”
              </p>
              <strong>- Business Client</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Answering common questions helps customers trust your business faster."
          />

          <div className="faq-list">
            <div className="card faq-card">
              <h3>Do you bring your own cleaning supplies?</h3>
              <p>Yes, cleaning supplies can be provided unless a client requests otherwise.</p>
            </div>

            <div className="card faq-card">
              <h3>Do you offer one-time and recurring cleaning?</h3>
              <p>Yes, we offer one-time, weekly, biweekly, and monthly options.</p>
            </div>

            <div className="card faq-card">
              <h3>How do I get a quote?</h3>
              <p>You can call, email, or use the contact form to request a quote.</p>
            </div>

            <div className="card faq-card">
              <h3>Do you clean offices and commercial spaces?</h3>
              <p>Yes, we provide cleaning services for both residential and commercial spaces.</p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}