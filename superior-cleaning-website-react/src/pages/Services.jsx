import CTA from "../components/CTA";
import SectionHeader from "../components/SectionHeader";

export default function Services() {
  return (
    <>
      <section className="page-hero small-page-hero">
        <div className="container">
          <h1>Our Cleaning Services</h1>
          <p>
            Professional cleaning solutions for homes, offices, and move-in or
            move-out needs.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            title="Services We Offer"
            subtitle="Each service is designed to help keep your space cleaner, healthier, and easier to maintain."
          />

          <div className="grid services-grid">
            <div className="card">
              <h3>Standard Residential Cleaning</h3>
              <p>
                Perfect for keeping your home maintained on a regular schedule.
              </p>
              <ul>
                <li>Dusting surfaces</li>
                <li>Vacuuming and mopping floors</li>
                <li>Bathroom and kitchen cleaning</li>
              </ul>
            </div>

            <div className="card">
              <h3>Deep Cleaning</h3>
              <p>
                A more detailed cleaning for homes that need a stronger reset.
              </p>
              <ul>
                <li>Baseboards and corners</li>
                <li>High-touch areas</li>
                <li>Extra buildup removal</li>
              </ul>
            </div>

            <div className="card">
              <h3>Commercial Cleaning</h3>
              <p>Professional cleaning for office and business environments.</p>
              <ul>
                <li>Workstations and common areas</li>
                <li>Restrooms and break rooms</li>
                <li>Entryways and floors</li>
              </ul>
            </div>

            <div className="card">
              <h3>Move-In / Move-Out Cleaning</h3>
              <p>Prepare the property for new occupancy with a full clean.</p>
              <ul>
                <li>Appliance wipe-downs</li>
                <li>Cabinet interiors if needed</li>
                <li>Bathroom and kitchen detailing</li>
              </ul>
            </div>

            <div className="card">
              <h3>Recurring Cleaning</h3>
              <p>Set up weekly, biweekly, or monthly cleaning visits.</p>
              <ul>
                <li>Consistent upkeep</li>
                <li>Flexible schedule options</li>
                <li>Great for busy households</li>
              </ul>
            </div>

            <div className="card">
              <h3>Custom Quotes</h3>
              <p>
                Need something specific? We can tailor services to fit your
                property and goals.
              </p>
              <ul>
                <li>Home size considerations</li>
                <li>Business cleaning needs</li>
                <li>One-time or recurring service</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}