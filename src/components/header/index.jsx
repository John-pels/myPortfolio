import React from "react";
import TocSharpIcon from "@material-ui/icons/TocSharp";
import { TemporaryDrawer } from "../Drawer";
import "./header.styles.scss";

const Header = () => (
  <header>
    <div className="container">
      <nav className="nav">
        <div className="nav__items brand">John-Pels</div>
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
    </div>
  </header>
);

export default Header;
