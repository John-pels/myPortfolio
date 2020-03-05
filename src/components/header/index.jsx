import React from "react";
import TocSharpIcon from "@material-ui/icons/TocSharp";
import Particles from "react-particles-js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitter,
  faMediumM,
  faLinkedinIn,
  faInstagram,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import { TemporaryDrawer } from "../Drawer";
import Typical from "react-typical";
import "./header.styles.scss";

const Header = () => (
  <header>
    <Particles
      params={{
        particles: {
          number: {
            value: 60
          },
          size: {
            value: 3
          }
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse"
            }
          }
        }
      }}
      style={{
        position: "absolute",
        width: "100%",
        height: "100vh"
      }}
    />
    <div className="container">
      <nav className="nav">
        <div className="nav__items brand">
          John<span>Pels</span>
        </div>
        <div className="nav__items list">
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>Portfolio</li>
            <li>Resume</li>

            <TemporaryDrawer openRight={<TocSharpIcon className="icon" />} />
          </ul>
        </div>
      </nav>
      <section className="brief-me">
        <div className="row">
          <div className="col-lg-8 col-md-12 col-sm-12 text-center p-5">
            <div className="social-media">
              <div className="handles">
                <a
                  href="https://github.com/John-pels"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
              </div>
              <div className="handles">
                <a
                  href="https://twitter.com/john_pels"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </a>
              </div>
              <div className="handles">
                <a
                  href="https://linkedin.com/in/ajeigbejohn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                </a>
              </div>
              <div className="handles">
                <a
                  href="https://www.instagram.com/john_pels/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
              </div>
              <div className="handles">
                <a
                  href="https://facebook.com/ajeigbeoluseyi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebookSquare} size="lg" />
                </a>
              </div>

              <div className="handles">
                <a
                  href="https://medium.com/@john_pels"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faMediumM} size="lg" />
                </a>
              </div>
            </div>
            <div className="typical">
              <Typical
                steps={["Hi,", 1500, "I am a Frontend Engineer.", 1500]}
                loop={Infinity}
                wrapper="p"
              />
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id sint
              neque harum suscipit, iste possimus repellat amet odio error ipsa
              a odit nostrum placeat dolor sequi dolorem? At, doloremque
              mollitia?
            </p>
            <div className="buttons">
              <button className="btn-work">My Work</button>

              <button className="btn-hire">Hire Me</button>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="my-image">
              <img
                src="https://res.cloudinary.com/john-pels/image/upload/v1583354722/My_image.jpg"
                alt="Ajeigbe John Oluwaseyi"
                className="img-responsive"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  </header>
);

export default Header;
