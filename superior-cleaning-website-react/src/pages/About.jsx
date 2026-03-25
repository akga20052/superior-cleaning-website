import CTA from "../components/CTA";

export default function About() {
  return (
    <>
      <section className="page-hero small-page-hero">
        <div className="container">
          <h1>About Superior Cleaning Solutions</h1>
          <p>
            A service-focused company committed to dependable cleaning and a
            professional client experience.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-page-grid">
          <div className="card">
            <h3>Our Mission</h3>
            <p>
              Our mission is to help clients enjoy cleaner, healthier, and more
              welcoming spaces through dependable service and attention to
              detail.
            </p>
          </div>

          <div className="card">
            <h3>What We Value</h3>
            <ul>
              <li>Professionalism</li>
              <li>Consistency</li>
              <li>Clear communication</li>
              <li>Respect for your home or business</li>
              <li>Customer satisfaction</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <h2 className="section-title">Why Clients Trust Us</h2>
          <div className="grid services-grid">
            <div className="card">
              <h3>Reliable Scheduling</h3>
              <p>
                We understand that clients need service providers who show up
                and communicate clearly.
              </p>
            </div>

            <div className="card">
              <h3>Detail-Oriented Work</h3>
              <p>
                We focus on delivering a level of cleaning that helps spaces
                look and feel refreshed.
              </p>
            </div>

            <div className="card">
              <h3>Flexible Service Options</h3>
              <p>
                From recurring home cleanings to move-out service, we aim to
                fit different client needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}