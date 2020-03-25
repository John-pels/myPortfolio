import React, { Component } from "react";
import swal from "sweetalert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./form.styles.scss";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      subject: "",
      message: ""
    };
  }

  updateName = event => {
    this.setState({
      fullName: event.target.value
    });
  };
  updateEmail = event => {
    this.setState({
      email: event.target.value
    });
  };
  updateSubject = event => {
    this.setState({
      subject: event.target.value
    });
  };
  updateMessage = event => {
    this.setState({
      message: event.target.value
    });
  };

  resetForm = () => {
    setInterval(
      this.setState({
        fullName: "",
        email: "",
        subject: "",
        message: ""
      }),
      2000
    );
  };
  handleSubmit = e => {
    e.preventDefault();
    const templateId = "contact_form";
    this.sendFeedback(templateId, {
      subject: this.state.subject,
      message: this.state.message,
      fullName: this.state.fullName,
      reply_to: this.state.email
    });
    this.resetForm();
  };

  sendFeedback(templateId, variables) {
    window.emailjs
      .send("gmail", templateId, variables)
      .then(() => {
        swal({
          title: "Thank you!",
          text: "Message sent successfully,\n We'll get back to you shortly.",
          icon: "success"
        });
      })
      .catch(() => {
        swal({
          title: "Oooooops!",
          text: "Something went wrong, please try again.",
          icon: "warning",
          dangerMode: true
        });
      });
  }

  render() {
    return (
      <form className="contact-form">
        <input
          type="text"
          placeholder="Full Name"
          className="form-input"
          value={this.state.fullName}
          onChange={this.updateName}
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          className="form-input"
          value={this.state.email}
          onChange={this.updateEmail}
          required
        />
        <input
          type="text"
          placeholder="Subject"
          className="form-input"
          value={this.state.subject}
          onChange={this.updateSubject}
          required
        />
        <textarea
          cols="5"
          rows="5"
          placeholder="Your Message"
          value={this.state.message}
          onChange={this.updateMessage}
          required
        ></textarea>
        <button
          type="submit"
          onClick={e => this.handleSubmit(e)}
          className="btn-contact"
        >
          Send Message &nbsp;
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </form>
    );
  }
}

export default ContactForm;
