import CTA from "../components/CTA";

export default function FAQ() {
  return (
    <>
      <section className="page-hero small-page-hero">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <p>
            Here are answers to some of the most common questions about our
            cleaning services.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container faq-list">
          <div className="card faq-card">
            <h3>Do you bring your own cleaning supplies?</h3>
            <p>Yes, unless you request that we use your preferred products.</p>
          </div>

          <div className="card faq-card">
            <h3>Do you offer recurring cleaning?</h3>
            <p>Yes, we offer weekly, biweekly, and monthly cleanings.</p>
          </div>

          <div className="card faq-card">
            <h3>How do I get a quote?</h3>
            <p>You can use the contact form or booking form and it will be sent to our email.</p>
          </div>

          <div className="card faq-card">
            <h3>Do you charge a cancellation fee?</h3>
            <p>
              A cancellation fee may apply for same-day cancellations or missed
              appointments. Customers must agree before submitting a booking request.
            </p>
          </div>

          <div className="card faq-card">
            <h3>Do you clean commercial properties?</h3>
            <p>Yes, we clean offices and other commercial spaces.</p>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}