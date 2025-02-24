import React from "react";
import classes from "./DecisionBox.module.css";

//title and buttons have to be their own components with their stylings
const DecisionBox = ({ singleDecision, setOpen }) => {
  return (
    <div className={classes.decision_main_container}>
      <div
        className={`${classes.title_main_container} ${classes.center_containers}`}
      >
        <div
          style={{
            display: "flex",
            width: "-webkit-fill-available",
            height: "-webkit-fill-available",
          }}
        >
          <div
            style={{
              border: "1px solid black",
              height: "inherit",
              width: "inherit",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "bisque",
            }}
          >
            title
          </div>
          <div
            style={{
              border: "1px solid black",
              cursor: "pointer",
              backgroundColor: "ButtonShadow",
            }}
            onClick={() => {
              setOpen();
            }}
          >
            X
          </div>
        </div>
      </div>
      <div
        className={`${classes.button_main_container} ${classes.center_containers}`}
      >
        2 buttons
      </div>
    </div>
  );
};

export default DecisionBox;
