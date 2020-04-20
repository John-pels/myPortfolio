import React, { useContext } from "react";
import Context from "../Context";

const Styles = {
  fontSize: ".2em",
  color: "#090833",
};

const Content = () => {
  const { state } = useContext(Context);

  return <h2 styles={Styles}>{`${state.isDark ? "Light" : "Dark"} mode `}</h2>;
};

export default Content;
