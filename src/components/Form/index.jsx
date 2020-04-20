import React, { useState } from "react";
import swal from "sweetalert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./form.styles.scss";

const ContactForm = () => {
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const resetForm = () => {
    setUserData({
      fullName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateId = "contact_form";
    sendFeedback(templateId, {
      subject: userData.subject,
      message: userData.message,
      fullName: userData.fullName,
      reply_to: userData.email,
    });
    resetForm();
  };

  const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send("gmail", templateId, variables)
      .then(() => {
        swal({
          title: "Thank you!",
          text: "Message sent successfully,\n We'll get back to you shortly.",
          icon: "success",
        });
      })
      .catch(() => {
        swal({
          title: "Oooooops!",
          text: "Something went wrong, please try again.",
          icon: "warning",
          dangerMode: true,
        });
      });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} name="message">
      <input
        type="text"
        placeholder="Full Name"
        name="fullName"
        className="form-input"
        value={userData.fullName}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        placeholder="Email Address"
        name="email"
        className="form-input"
        value={userData.email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        placeholder="Subject"
        name="subject"
        className="form-input"
        value={userData.subject}
        onChange={handleChange}
        required
      />
      <textarea
        cols="5"
        rows="5"
        placeholder="Your Message"
        name="message"
        value={userData.message}
        onChange={handleChange}
        required
      ></textarea>
      <button type="submit" className="btn-contact">
        Send Message &nbsp;
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </form>
  );
};

export default ContactForm;
