import React, { useState } from "react";
import "./Contact.css"; // Assuming you have a CSS file for styling

function Contact () {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      alert("Please fill all required fields.");
      return;
    }

    // Simulate form submission
    console.log("Form Submitted:", formData);
    setSuccessMessage("Thank you! Your message has been sent.");

    // Clear the form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });

    // Remove success message after 3 seconds
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <div className="contact-container">
      <div className="contact-left">
        <h1>Contact Us</h1>
        <p>Feel free to use the form or drop us an email. Old-fashioned phone calls work too.</p>

        <div className="contact-info">
          <p>📞 484.324.2400</p>
          <p>📧 info@mediaproper.com</p>
          <p>📍 Address</p>
        </div>
      </div>

      <div className="contact-right">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              placeholder="First name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              placeholder="Last name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="email"
            placeholder="example@email.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            placeholder="xxx-xxx-xxxx"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />

          <textarea
            placeholder="Type your message ..."
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Submit</button>

          {successMessage && <p className="success-message">{successMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
