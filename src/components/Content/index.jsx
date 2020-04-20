import React, { useContext } from "react";
import Context from "../Context";

const Styles = {
  fontSize: ".2em",
  color: "#090833",
};

const Content = () => {
  const { state } = useContext(Context);

  return (
    <span styles={Styles} className="mr-2">{`${
      state.isDark ? "Light" : "Dark"
    } mode `}</span>
  );
};

export default Content;
