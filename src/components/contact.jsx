import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="header-image">
        <h1>Contact Us</h1>
      </div>
      <div className="contact-content">
        <div className="contact-form">
          <form>
            <div className="form-group-contact">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group-contact">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group-contact">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="contact-info">
          <h2>Contact Information</h2>
          <hr></hr>
          <div className="info-item">
            <FaPhoneAlt className="info-icon" />
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <p>Email: info@example.com</p>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <p>Address: 1/8 Bonemill Road</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
