import React from "react";
import TocSharpIcon from "@material-ui/icons/TocSharp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitter,
  faMediumM,
  faLinkedinIn,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { TemporaryDrawer } from "../Drawer";
import Typical from "react-typical";
import "./header.styles.scss";

const Header = () => (
  <header>
    <div className="container">
      <nav className="nav">
        <div className="nav__items brand">
          John<span>Pels</span>
        </div>
        <div className="nav__items list">
          <ul>
            <li>About</li>
            <li>Portfolio</li>
            <li>Blog</li>
            <li>Contact</li>
            <TemporaryDrawer openRight={<TocSharpIcon className="icon" />} />
          </ul>
        </div>
      </nav>
      <section className="brief-me">
        <div className="row">
          <div className="col-lg-8 col-md-12 col-sm-12 text-center p-5">
            <div className="social-media">
              <div className="handles">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </div>
              <div className="handles">
                <FontAwesomeIcon icon={faFacebookSquare} size="lg" />
              </div>
              <div className="handles">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </div>
              <div className="handles">
                <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
              </div>
              <div className="handles">
                <FontAwesomeIcon icon={faMediumM} size="lg" />
              </div>
            </div>
            <div className="typical">
              <Typical
                steps={["Hello,", 1500, "I am a Frontend Engineer!", 1500]}
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

              <button className="btn-hire">Hire Me!</button>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="my-image">
              <img
                src="https://res.cloudinary.com/john-pels/image/upload/v1583317593/My_image-removebg-preview.png"
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
