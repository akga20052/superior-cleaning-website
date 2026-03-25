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
            <p>Call, email, or submit the form and we will get back to you.</p>

            <div className="contact-info-block">
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:7623834983">762-383-4983</a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:gijoe8807@gmail.com">gijoe8807@gmail.com</a>
              </p>
              <p>
                <strong>Service Area:</strong> South Carolina / Georgia service
                area
              </p>
              <p>
                <strong>Motto:</strong> We Dont Cut Corners, We Clean 'Em
              </p>
            </div>
          </div>

          <div className="card">
            <h3>Get a Quote</h3>

            <form
              className="form"
              action="https://formsubmit.co/gijoe8807@gmail.com"
              method="POST"
            >
              <input
                type="hidden"
                name="_subject"
                value="New Quote Request - Superior Cleaning Solutions"
              />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
              />
              <input
                type="text"
                name="city"
                placeholder="City / Service Address"
                required
              />

              <select name="serviceType" defaultValue="" required>
                <option value="" disabled>
                  Select Service
                </option>
                <option>Residential Cleaning</option>
                <option>Commercial Cleaning</option>
                <option>Deep Cleaning</option>
                <option>Move-In / Move-Out</option>
              </select>

              <textarea
                name="details"
                rows="6"
                placeholder="Tell us about your cleaning needs"
                required
              ></textarea>

              <button className="btn btn-primary" type="submit">
                Send Quote Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
