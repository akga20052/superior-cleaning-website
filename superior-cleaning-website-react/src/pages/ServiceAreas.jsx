import CTA from "../components/CTA";

export default function ServiceAreas() {
  return (
    <>
      <section className="page-hero small-page-hero">
        <div className="container">
          <h1>Service Areas</h1>
          <p>
            We proudly serve residential and commercial clients across our South
            Carolina and Georgia service areas.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid services-grid">
            <div className="card">
              <h3>North Augusta</h3>
              <p>Residential, apartment, and commercial cleaning services.</p>
            </div>
            <div className="card">
              <h3>Augusta</h3>
              <p>Standard, deep cleaning, and move-in/move-out service.</p>
            </div>
            <div className="card">
              <h3>Evans</h3>
              <p>Reliable recurring and one-time cleaning options.</p>
            </div>
            <div className="card">
              <h3>Grovetown</h3>
              <p>Home cleaning, rental turnovers, and office cleaning.</p>
            </div>
          </div>

          <div className="card service-area-note">
            <h3>Don’t see your area listed?</h3>
            <p>
              Contact us anyway. We may still be able to service your location
              depending on scheduling and distance.
            </p>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}