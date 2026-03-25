export default function Contact() {
  return (
    <>
      <section className="page-hero small-page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>
            Reach out today for a quote, to ask a question, or to schedule your
            next cleaning service.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-box">
            <h2>Let’s Get You Booked</h2>
            <p>Call or message us today for a quote or to schedule service.</p>

            <div className="contact-info-block">
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:7623834983">762-383-4983</a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:info@superiorcleaningsolutions.com">
                  info@superiorcleaningsolutions.com
                </a>
              </p>
              <p>
                <strong>Website:</strong>{" "}
                <a
                  href="https://superiorcleaningsc.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  superiorcleaningsc.com
                </a>
              </p>
              <p>
                <strong>Service Area:</strong> South Carolina / Georgia service
                area
              </p>
            </div>
          </div>

          <div className="card">
            <h3>Request a Quote</h3>
            <form className="form">
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email Address" />
              <input type="tel" placeholder="Phone Number" />
              <select defaultValue="">
                <option value="" disabled>
                  Select Service
                </option>
                <option>Residential Cleaning</option>
                <option>Commercial Cleaning</option>
                <option>Deep Cleaning</option>
                <option>Move-In / Move-Out</option>
              </select>
              <textarea
                rows="6"
                placeholder="Tell us about your cleaning needs"
              ></textarea>
              <button className="btn btn-primary" type="button">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}