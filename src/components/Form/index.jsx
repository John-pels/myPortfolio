import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./form.styles.scss";

class ContactForm extends Component {
  render() {
    return (
      <form
        method="POST"
        name="contact"
        data-netlify="true"
        className="contact-form"
      >
        <input
          type="text"
          placeholder="Full Name"
          className="form-input"
          name="name"
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          className="form-input"
          email="email"
          required
        />
        <input
          type="text"
          placeholder="Subject"
          className="form-input"
          name="subject"
          required
        />
        <textarea
          cols="5"
          rows="5"
          placeholder="Your Message"
          name="message"
          required
        ></textarea>
        <button type="submit" className="btn-contact">
          Send Message &nbsp;
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </form>
    );
  }
}

export default ContactForm;
