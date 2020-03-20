import React from "react";
import Header from "../../components/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { CarouselSlider } from "../../components/carousel";
import {
  faDesktop,
  faCode,
  faBriefcase,
  faPeopleCarry,
  faUserAlt,
  faPencilAlt,
  faArrowRight,
  faEnvelope,
  faPhoneAlt,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";
import "./index.styles.scss";

const Homepage = () => {
  return (
    <main className="homepage">
      <Header />
      <section className="about mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-12 offset-lg-1">
              <section className="about-me-picture">
                <img
                  src="https://res.cloudinary.com/john-pels/image/upload/v1583354722/My_image.jpg"
                  alt="pic"
                  className="img-responsive my-image"
                />
              </section>
            </div>
            <div className="col-lg-6 col-sm-12">
              <section className="about-me-context">
                <h6 className="about-me-h6 ">About Me</h6>
                <div className="border-b"></div>

                <p className="about-me-p pt-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
                  ipsa voluptatibus natus ipsum deleniti exercitationem aut
                  asperiores, soluta incidunt nesciunt? Vitae deleniti assumenda
                  voluptatibus libero vel aliquid dolorum ratione eveniet?
                </p>
                <p className="about-me-p">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
                  ipsa voluptatibus natus ipsum deleniti exercitationem aut
                </p>
                <div className="about-buttons">
                  <button className="about-btn-work">Blog</button>

                  <button className="about-btn-download">Download CV</button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio pt-5">
        <div className="container">
          <h1 className="portfolio-h1  ">What I can Do</h1>
          <div className="border-b "></div>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <section className="what-i-do">
                <div className="icon">
                  <FontAwesomeIcon icon={faDesktop} />
                </div>
                <p className="tagline">User Interface</p>
                <p className="what-i-do--p text-center">
                  An Interface that is appealing to users and beautiful to
                  behold using modern tools.
                </p>
              </section>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <section className="what-i-do">
                <div className="icon">
                  <FontAwesomeIcon icon={faCode} />
                </div>
                <p className="tagline">Clean Code</p>
                <p className="what-i-do--p text-center">
                  An easily understandable code and good architechtural pattern
                  for humans and for future use.
                </p>
              </section>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <section className="what-i-do">
                <div className="icon">
                  <FontAwesomeIcon icon={faBriefcase} />
                </div>
                <p className="tagline">User Experience</p>
                <p className="what-i-do--p text-center">
                  Products that provide usability, meaningful, empathy and
                  relevant experiences to users.
                </p>
              </section>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <section className="what-i-do">
                <div className="icon">
                  <FontAwesomeIcon icon={faPeopleCarry} />
                </div>
                <p className="tagline">Team Work</p>
                <p className="what-i-do--p text-center">
                  A character that forms a formidable collaboration with team
                  members to deliver great product.
                </p>
              </section>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <section className="what-i-do">
                <div className="icon">
                  <FontAwesomeIcon icon={faUserAlt} />
                </div>
                <p className="tagline">Leadership</p>
                <p className="what-i-do--p text-center">
                  Lead a team of bright minds to solve technical, business and
                  comprehensive problems.
                </p>
              </section>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <section className="what-i-do">
                <div className="icon">
                  <FontAwesomeIcon icon={faPencilAlt} />
                </div>
                <p className="tagline">Creative Design</p>
                <p className="what-i-do--p text-center">
                  Designs that are unique, effective, creating a strong
                  impression and building consumer trust.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="testimonial">
        <div className="container">
          <CarouselSlider />
        </div>
      </section> */}
      <section className="contact-me">
        <div className="container">
          <h1 className="contact-h1">Get In Touch</h1>
          <div className="border-b"></div>
          <div className="row">
            <div className="col-lg-7 col-sm-12">
              <form action="" className="contact-form">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="form-input"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="form-input"
                  required
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="form-input"
                  required
                />
                <textarea
                  cols="5"
                  rows="5"
                  placeholder="Your Message"
                ></textarea>
                <button type="submit" className="btn-contact">
                  Send Message &nbsp;
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </form>
            </div>
            <div className="col-lg-5 col-sm-12">
              <div className="contact-details">
                <div className="contact__icon">
                  <FontAwesomeIcon icon={faEnvelope} className="mt-2" />
                </div>
                <div className="contact__texts">oluseyiajeigbe@yahoo.com</div>
              </div>
              <div className="contact-details">
                <div className="contact__icon">
                  <FontAwesomeIcon icon={faPhoneAlt} className="mt-2" />
                </div>
                <div className="contact__texts">
                  +2348188974303, +2348132815396
                </div>
              </div>
              <div className="contact-details">
                <div className="contact__icon">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mt-2" />
                </div>
                <div className="contact__texts">
                  Ibadan, Oyo state, Nigeria.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="copyright">
        All Right Reserved &copy; 2020 Ajeigbe John Oluwaseyi
      </section>
    </main>
  );
};

export default Homepage;
