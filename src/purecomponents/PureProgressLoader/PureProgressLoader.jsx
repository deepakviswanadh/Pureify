import React from "react";
import classes from "./PureProgressLoader.module.css";
import InnerBar from "./InnerBar";

const PureProgressLoader = () => {
  return (
    <div className={`${classes.main_container}`} id="parent">
      <InnerBar />
    </div>
  );
};

export default PureProgressLoader;
