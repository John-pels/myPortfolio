import React from "react";
import Header from "../../components/header";
import Slide from "react-reveal/Slide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CarouselSlider } from "../../components/carousel";
import Pdf from "../../components/resume.pdf";
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
      <Header
        about={"about"}
        blog={"blog"}
        contact={"contact"}
        portfolio={"portfolio"}
        testimonial={"testimonial"}
        project={"project"}
      />
      <section className="about mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-12 offset-lg-1">
              <section className="about-me-picture">
                <Slide left>
                  <img
                    src="https://res.cloudinary.com/john-pels/image/upload/v1583354722/My_image.jpg"
                    alt="pic"
                    className="img-responsive my-image"
                  />
                </Slide>
              </section>
            </div>
            <div className="col-lg-6 col-sm-12">
              <section className="about-me-context" id="about">
                <h6 className="about-me-h6 ">About Me</h6>
                <div className="border-b"></div>
                <Slide right>
                  <p className="about-me-p pt-4">
                    Hello, I'm Ajeigbe John Oluseyi, I am a Frontend Engineer
                    based in Ibadan, Nigeria. I currently work as a freelancer
                    where I build awesome products for client, I previously
                    worked with an amazing team of developers at{" "}
                    <a
                      href="https://devcareer.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      DevCareer
                    </a>{" "}
                    and Platr.
                  </p>
                  <p className="about-me-p">
                    I volunteer for tech events, and participate in Hackathons.
                    I spend my liesure reading, researching and writing articles
                    for the public.
                  </p>
                  <div className="about-buttons">
                    <button className="about-btn-work">Blog</button>

                    <button className="about-btn-download">
                      <a href={Pdf} target="_blank" rel="noopener noreferrer">
                        Download CV
                      </a>
                    </button>
                  </div>
                </Slide>
              </section>
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio pt-5" id="portfolio">
        <div className="container">
          <h1 className="portfolio-h1  ">What I can Do</h1>
          <div className="border-b "></div>
          <Slide left>
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
                    An easily understandable code and good architechtural
                    pattern for humans and for future use.
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
          </Slide>
          <Slide right>
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
          </Slide>
        </div>
      </section>

      <section className="projects" id="project">
        <div className="container">
          <h4 className="project-h5">Projects</h4>
          <div className="border-b "></div>
          <div className="row">
            <div className="col-lg-4">
              <div className="project-col"></div>
            </div>
            <div className="col-lg-4">
              <div className="project-col"></div>
            </div>
            <div className="col-lg-4">
              <div className="project-col"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial " id="testimonial">
        <div className="container">
          <h4 className="testimonial-h5">Testimonial</h4>
          <div className="border-b "></div>
          <CarouselSlider />
        </div>
      </section>

      <section className="contact-me" id="contact">
        <div className="container">
          <h1 className="contact-h1">Get In Touch</h1>
          <div className="border-b"></div>
          <div className="row">
            <div className="col-lg-7 col-sm-12">
              <Slide left>
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
              </Slide>
            </div>
            <div className="col-lg-5 col-sm-12">
              <Slide right>
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
              </Slide>
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
