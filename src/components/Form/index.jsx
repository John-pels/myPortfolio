import React, { Component } from "react";
import swal from "sweetalert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./form.styles.scss";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};
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

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  resetForm = () => {
    this.setState({
      fullName: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "message", ...this.state })
    })
      .then(() =>
        swal({
          title: "Thank you!",
          text: "Message sent successfully,\n We'll get back to you shortly.",
          icon: "success"
        })
      )
      .catch(error =>
        swal({
          title: "Ooooops!",
          text: error,
          icon: "danger"
        })
      );

    e.preventDefault();
  };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   const templateId = "contact_form";
  //   this.sendFeedback(templateId, {
  //     subject: this.state.subject,
  //     message: this.state.message,
  //     fullName: this.state.fullName,
  //     reply_to: this.state.email
  //   });
  //   this.resetForm();
  // };

  // sendFeedback(templateId, variables) {
  //   window.emailjs
  //     .send("gmail", templateId, variables)
  //     .then(() => {
  //       swal({
  //         title: "Thank you!",
  //         text: "Message sent successfully,\n We'll get back to you shortly.",
  //         icon: "success"
  //       });
  //     })
  //     .catch(() => {
  //       swal({
  //         title: "Oooooops!",
  //         text: "Something went wrong, please try again.",
  //         icon: "warning",
  //         dangerMode: true
  //       });
  //     });
  // }

  render() {
    const { fullName, email, subject, message } = this.state;
    return (
      <form
        className="contact-form"
        method="POST"
        onSubmit={this.handleSubmit}
        data-netlify="true"
        name="message"
      >
        {/* <input type="hidden" name="form-name" value="message" /> */}
        <input
          type="text"
          placeholder="Full Name"
          name="fullName"
          className="form-input"
          value={fullName}
          onChange={this.handleChange}
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          className="form-input"
          value={email}
          onChange={this.handleChange}
          required
        />
        <input
          type="text"
          placeholder="Subject"
          name="subject"
          className="form-input"
          value={subject}
          onChange={this.handleChange}
          required
        />
        <textarea
          cols="5"
          rows="5"
          placeholder="Your Message"
          name="message"
          value={message}
          onChange={this.handleChange}
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
