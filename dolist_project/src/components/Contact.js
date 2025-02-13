import React from "react";

function Contact() {
  return (
    <div className="container mt-5">
      <h1 className="text-center">📞 Contact Us</h1>
      <p className="text-muted text-center">
        Have questions or need support? Reach out to us anytime!
      </p>

      <div className="row mt-4">
        <div className="col-md-6">
          <h3>📍 Our Location</h3>
          <p>Pune, Maharashtra, India</p>

          <h3>📧 Email</h3>
          <p>support@todolist.com</p>

          <h3>📞 Phone</h3>
          <p>+91 98765 43210</p>

          <h3>🕒 Business Hours</h3>
          <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
        </div>

        <div className="col-md-6">
          <h3>💬 Send Us a Message</h3>
          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" placeholder="Enter your name" />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="Enter your email" />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="4" placeholder="Type your message"></textarea>
            </div>

            <button type="submit" className="btn btn-danger rounded-pill w-100">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
