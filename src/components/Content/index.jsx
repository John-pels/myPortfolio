import React, { useContext } from "react";
import Context from "../Context";

const Content = () => {
  const { state } = useContext(Context);

  return (
    <span className="mr-2">{`${state.isDark ? "Light" : "Dark"} mode `}</span>
  );
};

export default Content;
