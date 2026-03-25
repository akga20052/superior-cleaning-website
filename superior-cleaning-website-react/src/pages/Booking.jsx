export default function Booking() {
  return (
    <>
      <section className="page-hero small-page-hero">
        <div className="container">
          <h1>Book Your Cleaning</h1>
          <p>
            Fill out the form below to request a booking. We will review your
            information and contact you to confirm your appointment.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container booking-grid">
          <div className="card">
            <h3>Booking Request Form</h3>

            <form
              className="form"
              action="https://formsubmit.co/gijoe8807@gmail.com"
              method="POST"
            >
              <input type="hidden" name="_subject" value="New Booking Request - Superior Cleaning Solutions" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <input type="text" name="fullName" placeholder="Full Name" required />
              <input type="email" name="email" placeholder="Email Address" required />
              <input type="tel" name="phone" placeholder="Phone Number" required />
              <input type="text" name="address" placeholder="Service Address" required />
              <input type="text" name="city" placeholder="City" required />

              <select name="serviceType" defaultValue="" required>
                <option value="" disabled>Select Service</option>
                <option>Residential Cleaning</option>
                <option>Commercial Cleaning</option>
                <option>Deep Cleaning</option>
                <option>Move-In / Move-Out</option>
              </select>

              <select name="frequency" defaultValue="" required>
                <option value="" disabled>Select Frequency</option>
                <option>One-Time</option>
                <option>Weekly</option>
                <option>Biweekly</option>
                <option>Monthly</option>
              </select>

              <input type="date" name="preferredDate" required />
              <input type="time" name="preferredTime" required />

              <textarea
                name="details"
                rows="6"
                placeholder="Tell us about your cleaning needs"
                required
              ></textarea>

              <label className="checkbox-label">
                <input type="checkbox" name="cancellationPolicyAccepted" required />
                <span>
                  I understand and agree that missed appointments or late cancellations
                  may be subject to a cancellation fee.
                </span>
              </label>

              <button className="btn btn-primary" type="submit">
                Submit Booking Request
              </button>
            </form>
          </div>

          <div className="card">
            <h3>Booking Information</h3>
            <ul className="info-list">
              <li>Booking requests are reviewed before confirmation.</li>
              <li>Preferred date and time are requests, not guaranteed until confirmed.</li>
              <li>A cancellation fee may apply for same-day cancellations or missed appointments.</li>
              <li>We will contact you by phone or email to confirm service details.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}