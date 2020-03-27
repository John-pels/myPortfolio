import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import PersonIcon from "@material-ui/icons/Person";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const ulStyles = {
  display: "flex",
  flexFlow: "column",
  listStyleType: "none",
  fontSize: "1.2em",
  cursor: "pointer",
  padding: " 1.3em"
};
const liStyles = {
  paddingBottom: ".5em"
};
const aStyles = {
  textDecoration: "none",
  color: "#090833"
};
const iconStyles = {
  marginRight: ".5em"
};

const backArrow = {
  fontSize: "1.8em",
  marginTop: ".4em",
  marginRight: "1em"
};

const heading = {
  display: "flex",
  justifyContent: "space-evenly",
  marginTop: "-.5em",
  background: "#090833",
  color: "#FFF",
  padding: ".3em 0"
};
const h2Styles = {
  fontSize: "1.6em"
};

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

export function TemporaryDrawer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <div style={heading}>
          <span>
            <ArrowBackIcon style={backArrow} />
          </span>
          <h2 className="text-center mt-2" style={h2Styles}>
            Menu
          </h2>
        </div>

        <ul style={ulStyles}>
          <li style={liStyles}>
            <a href="#about" rel="noopener noreferrer" style={aStyles}>
              <PersonIcon style={iconStyles} />
              About
            </a>
          </li>
          <li style={liStyles}>
            <a href="#blog" rel="noopener noreferrer" style={aStyles}>
              <MenuBookIcon style={iconStyles} />
              Blog
            </a>
          </li>
          <li style={liStyles}>
            <a href="#contact" rel="noopener noreferrer" style={aStyles}>
              <ContactPhoneIcon style={iconStyles} />
              Contact
            </a>
          </li>
          <li style={liStyles}>
            <a href="#portfolio" rel="noopener noreferrer" style={aStyles}>
              <DeveloperModeIcon style={iconStyles} />
              Portfolio
            </a>
          </li>
          <li style={liStyles}>
            <a href="#testimonial" rel="noopener noreferrer" style={aStyles}>
              <PeopleAltIcon style={iconStyles} />
              Testimonial
            </a>
          </li>
        </ul>
      </List>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer("right", true)}>{props.openRight}</Button>

      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        {sideList("left")}
      </Drawer>

      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
      >
        {sideList("right")}
      </Drawer>
    </div>
  );
}
