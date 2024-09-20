import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.send(
        "service_tfpktzp", // Your EmailJS service ID
        "template_qvzkj1o", // Your EmailJS template ID
        formData,
        "tiww_O400Iz4iz37w" // Your EmailJS user ID
      );
      setFormData({ name: "", email: "", message: "" });
      alert("Your message was sent successfully.");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <section className="contact-section section bg-light py-5">
      <div className="container">
        <div className="row justify-content-center">
          {/* Contact Form Column */}
          <div className="col-lg-6 col-md-8">
            <div className="contact-form-box  p-4  rounded">
              <h3 className="text-center mb-4">Get in Touch</h3>
              <form id="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    className="form-control"
                    rows="5"
                    placeholder="Write your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button className="btn btn-main btn-block mt-3" type="submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Details Column */}
          <div className="col-lg-5 col-md-8 mt-5 mt-lg-0">
            <div className="contact-info-box p-4">
              <h4 className="mb-4">Contact Information</h4>
              <p>We are here to answer any questions you may have.</p>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <i className="fas fa-map-marker-alt mr-2"></i>
                  ##, Some Location, City, Country
                </li>
                <li className="mb-3">
                  <i className="fas fa-envelope mr-2"></i>
                  theonecrawlingsolutions@gmail.com
                </li>
                <li className="mb-3">
                  <i className="fas fa-phone mr-2"></i>
                  +91 96645 08201
                </li>
              </ul>
              <h5 className="mt-4">Follow Us</h5>
              <ul className="social-icons list-inline mt-3">
                <li className="list-inline-item">
                  <a href="http://www.themefisher.com">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="http://www.themefisher.com">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="http://www.themefisher.com">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
