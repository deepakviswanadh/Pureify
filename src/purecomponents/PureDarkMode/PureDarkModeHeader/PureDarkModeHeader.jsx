import React from "react";
import PureDarkModeButton from "./PureDarkModeButton";
import PureDarkModeLogo from "./PureDarkModeLogo";
import classes from "./PureDarkModeHeader.module.css";

const PureDarkModeHeader = () => {
  return (
    <div className={classes.header_main}>
      <div className={classes.logo_main}>
        <PureDarkModeLogo />
      </div>
      <div className={classes.button_main}>
        <PureDarkModeButton />
      </div>
    </div>
  );
};

export default PureDarkModeHeader;
