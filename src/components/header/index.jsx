import React from "react";
import TocSharpIcon from "@material-ui/icons/TocSharp";
import Zoom from "react-reveal/Zoom";
import Switch from "../Switch";
import Particles from "react-particles-js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitter,
  faMediumM,
  faLinkedinIn,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { TemporaryDrawer } from "../Drawer";
import Typical from "react-typical";
import "./header.styles.scss";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Header = ({ about, blog, contact, portfolio, testimonial, project }) => (
  <header>
    <Particles
      params={{
        particles: {
          number: {
            value: 40,
          },
          size: {
            value: 3,
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
          },
        },
      }}
      style={{
        position: "absolute",
        width: "100%",
        height: "100vh",
      }}
    />
    <div className="container">
      <nav className="nav">
        <div className="nav__items brand">John</div>
        <div className="nav__items list">
          <ul>
            <li>
              <a href={`#${about}`} rel="noopener noreferrer">
                About
              </a>
            </li>
            <li>
              <a
                href="https://johnpels.hashnode.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
            </li>
            <li>
              <a href={`#${contact}`} rel="noopener noreferrer">
                Contact
              </a>
            </li>
            <li>
              <a href={`#${portfolio}`} rel="noopener noreferrer">
                Portfolio
              </a>
            </li>
            <li>
              <a href={`#${testimonial}`} rel="noopener noreferrer">
                Testimonial
              </a>
            </li>
            <li style={{ marginTop: "-.3em", marginLeft: "4em" }}>
              <Switch />
            </li>

            <TemporaryDrawer openRight={<TocSharpIcon className="icon" />} />
          </ul>
        </div>
      </nav>
      <section className="brief-me">
        <div className="row">
          <div className="col-lg-8 col-md-12 col-sm-12 text-center p-5">
            <p className="my-name">Hi, I'm John!</p>
            <div className="typical mb-4">
              <Typical
                steps={[
                  "Mobile Web Specialist,",
                  5000,
                  "Frontend Engineer",
                  5000,
                  "Computer Scientist",
                  5000,
                ]}
                loop={Infinity}
                wrapper="p"
              />
            </div>
            <div className="buttons mb-5">
              <button className="btn-work">
                <a href={`#${project}`} rel="noopener noreferrer">
                  My Work
                </a>
              </button>

              <button className="btn-hire">
                <a href={`#${contact}`} rel="noopener noreferrer">
                  {" "}
                  Hire Me
                </a>
              </button>
            </div>
            <div className="social-media">
              <div className="handles email">
                <a
                  href="mailto:oluseyiajeigbe@yahoo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faEnvelope} size="lg" />
                </a>
              </div>
              <div className="handles github">
                <a
                  href="https://github.com/John-pels"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
              </div>
              <div className="handles twitter">
                <a
                  href="https://twitter.com/john_pels"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </a>
              </div>
              <div className="handles linkedin">
                <a
                  href="https://linkedin.com/in/ajeigbejohn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                </a>
              </div>
              <div className="handles instagram">
                <a
                  href="https://www.instagram.com/john_pels/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
              </div>
              <div className="handles facebook">
                <a
                  href="https://facebook.com/ajeigbeoluseyi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebookSquare} size="lg" />
                </a>
              </div>

              <div className="handles medium">
                <a
                  href="https://medium.com/@john_pels"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faMediumM} size="lg" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="my-image">
              <Zoom left>
                <img
                  src="https://res.cloudinary.com/john-pels/image/upload/v1583354722/My_image.jpg"
                  alt="Ajeigbe John Oluwaseyi"
                  className="img-responsive"
                />
              </Zoom>
            </div>
          </div>
        </div>
      </section>
    </div>
  </header>
);

export default Header;
