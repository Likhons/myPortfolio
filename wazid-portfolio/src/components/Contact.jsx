import { useState } from 'react';

function Contact() {
  const [sending, setSending] = useState(false);

  function handleSubmit() {
    setSending(true);
    setTimeout(() => setSending(false), 4000);
  }

  return (
    <section className="contact" id="contact">
      <h2 className="heading">Contact <span>Me</span></h2>
      <p className="section-subtitle">Let's work together</p>

      <div className="contact-wrapper">
        <div className="contact-info">
          <div className="contact-info-item">
            <i className="bx bx-envelope"></i>
            <div><h4>Email</h4><p>wazidlikhon@gmail.com</p></div>
          </div>
          <div className="contact-info-item">
            <i className="bx bx-phone"></i>
            <div><h4>Phone</h4><p>+880 1759256575</p></div>
          </div>
          <div className="contact-info-item">
            <i className="bx bx-map"></i>
            <div><h4>Location</h4><p>Dhaka, Bangladesh</p></div>
          </div>
        </div>

        <form
          action="https://formspree.io/f/mvojodbp"
          method="post"
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <div className="input-box">
            <input type="text" name="Full Name" placeholder="Full Name" required />
            <input type="email" name="Email" placeholder="Email Address" required />
          </div>
          <div className="input-box">
            <input type="tel" name="Mobile Number" placeholder="Mobile Number" />
            <input type="text" name="Email Subject" placeholder="Subject" />
          </div>
          <textarea name="User Message" rows="8" placeholder="Your Message" required></textarea>
          <input
            type="submit"
            value={sending ? 'Sending…' : 'Send Message'}
            className="btn"
            style={{ opacity: sending ? 0.7 : 1, pointerEvents: sending ? 'none' : 'auto' }}
          />
        </form>
      </div>
    </section>
  );
}

export default Contact;