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

const ulStyles = {
  display: "flex",
  flexFlow: "column",
  listStyleType: "none",
  fontSize: "1.5em",
  cursor: "pointer",
  padding: "2em 1em"
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

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

export function TemporaryDrawer(
  props,
  { about, blog, contact, portfolio, testimonial }
) {
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
